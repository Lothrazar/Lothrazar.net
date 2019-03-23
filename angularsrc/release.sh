
commit="'$*'"

echo "ng build"
ng build --prod --base-href lothrazar.github.io

echo "deploy dist"
cd dist/lothrazarpages

mv * ../../../

echo "uploading"
git add -A
git commit -am "$commit"
git push o master


echo "release complete: $commit"

