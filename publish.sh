#!/bin/bash

set -e 

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

make render

pushd public
git add .
git commit -m "Publish site"
git push origin master
popd
