#!/bin/bash

# run from root

rm -f dist

#echo "build"
ng build --prod --base-href lothrazar.net


echo " ****** "
echo "Build complete; view dist/index.html"
echo " ****** "

