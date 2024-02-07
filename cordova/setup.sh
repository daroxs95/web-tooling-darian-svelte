#!/bin/bash
npm install
export PUBLIC_URL=./
npm run-script build

#setup cordova build
rm -R cordova/www/ || true
mkdir cordova/www/
cp -R dist/* cordova/www/
mkdir cordova/www/js
cp cordova/index.js cordova/www/js/index.js