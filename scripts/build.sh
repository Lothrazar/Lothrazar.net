#!/bin/bash

# since ng always messes with dist
# this will build and deploy to a git-folder for releases 

# folder setup if not exist
mkdir -p dist
mkdir -p release

# clean dist folder
rm -Rf dist

# clean release folder, but do NOT delete the .git folder
cd release
rm -rf * 
cd ..

# run the build
ng build --prod --base-href lothrazar.net

# push it over to release folder
cp -r ./dist/lothrazarpages/* ./release

# was not picked up by build. so overwrite this
cp .htaccess ./release/.htaccess

echo " ****** "
echo "Build ready in /release/"
echo " ****** "

cd release

git add -A

git status
