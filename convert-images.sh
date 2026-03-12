for f in $(find client/public/Image -name "*.jpg" -o -name "*.png"); do cwebp "$f" -o "${f%.*}.webp"; done
echo "✅ Conversion terminée !"
