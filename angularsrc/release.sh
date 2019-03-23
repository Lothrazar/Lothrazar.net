  

ng build --prod --base-href lothrazar.github.io

cd dist/lothrazarpages

mv * ../../../

git add -A
git commit -am 'release'
git push o master



