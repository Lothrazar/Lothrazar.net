#!/bin/bash

# run from root

commit="'$*'"

echo "ng build"
ng build --prod --base-href lothrazar.github.io

echo "deploy dist"
cd dist/lothrazarpages

ls

# mv * ../../../

echo "view index.html for testing"



#git add -A
#git commit -am "$commit"
#git push o master
#echo "release complete: $commit"

