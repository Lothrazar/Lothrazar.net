#!/bin/bash

# run from root
cd angularsrc

ng build --prod --base-href lothrazar.github.io

#echo "deploy dist"
cd dist/lothrazarpages

ls

mv * ../../../

echo "view index.html for testing"


