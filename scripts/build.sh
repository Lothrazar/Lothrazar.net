#!/bin/bash

ng build --prod --base-href lothrazar.net

# push and overwrite
cp -r ./dist/lothrazarpages/* ./release

# was not picked up by build
cp .htaccess ./release/.htaccess

echo " ****** "
echo "Build complete; view releases/index.html"
echo " ****** "

