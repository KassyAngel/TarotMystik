import { useState, useEffect } from 'react';

interface UseRatingPromptConfig {
  // Nombre de fois que l'utilisateur doit utiliser l'app avant de voir la popup
  minUsageCount?: number;
  // Délai en jours avant de re-proposer si l'utilisateur clique sur "Plus tard"
  postponeDays?: number;
  // Nombre de jours après l'installation avant la première popup
  daysAfterInstall?: number;
}

export function useRatingPrompt(config: UseRatingPromptConfig = {}) {
  const {
    minUsageCount = 3,
    postponeDays = 7,
    daysAfterInstall = 3
  } = config;

  const [showRating, setShowRating] = useState(false);

  useEffect(() => {
    checkShouldShowRating();
  }, []);

  const checkShouldShowRating = () => {
    // Ne pas montrer si l'utilisateur a définitivement refusé
    const dismissed = localStorage.getItem('ratingDismissed');
    if (dismissed === 'true') {
      return;
    }

    // Ne pas montrer si l'utilisateur a déjà noté
    const hasRated = localStorage.getItem('hasRated');
    if (hasRated === 'true') {
      return;
    }

    // Vérifier si l'utilisateur a reporté récemment
    const postponed = localStorage.getItem('ratingPostponed');
    if (postponed) {
      const postponedDate = parseInt(postponed);
      const daysSincePostponed = (Date.now() - postponedDate) / (1000 * 60 * 60 * 24);
      if (daysSincePostponed < postponeDays) {
        return;
      }
    }

    // Vérifier la date d'installation
    let installDate = localStorage.getItem('appInstallDate');
    if (!installDate) {
      installDate = Date.now().toString();
      localStorage.setItem('appInstallDate', installDate);
    }
    const daysSinceInstall = (Date.now() - parseInt(installDate)) / (1000 * 60 * 60 * 24);
    if (daysSinceInstall < daysAfterInstall) {
      return;
    }

    // Incrémenter et vérifier le compteur d'utilisation
    let usageCount = parseInt(localStorage.getItem('appUsageCount') || '0');
    usageCount++;
    localStorage.setItem('appUsageCount', usageCount.toString());

    if (usageCount >= minUsageCount) {
      // Attendre un peu avant de montrer la popup (pour ne pas déranger immédiatement)
      setTimeout(() => {
        setShowRating(true);
      }, 5000); // 5 secondes après le chargement
    }
  };

  const handleRate = () => {
    localStorage.setItem('hasRated', 'true');
    setShowRating(false);
  };

  const handleClose = () => {
    setShowRating(false);
  };

  return {
    showRating,
    handleRate,
    handleClose
  };
}