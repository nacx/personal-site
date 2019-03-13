#!/bin/bash

set -e 

make render

pushd public
git add .
git commit -m "Publish site"
git push origin master
popd

git add public
git commit -m "Update submodule to the last published version"
