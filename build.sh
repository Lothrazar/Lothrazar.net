#!/bin/bash

# run from root

rm *.js
rm *.css

cd angularsrc

#echo "build"
ng build --prod --base-href lothrazar.github.io

#echo "deploy dist"
cd dist/lothrazarpages

ls
# TODO? delete all js, css, from root?

cp -r * ../../../

echo " ***** "
echo "Build complete; view index.html"
echo " ***** "

