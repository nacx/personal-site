#!/bin/bash

PUBLIC_DIR=public

set -e 

if [[ $(git status -s) ]]; then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Deleting old publication"
rm -rf ${PUBLIC_DIR}
mkdir ${PUBLIC_DIR}
git worktree prune
rm -rf .git/worktrees/${PUBLIC_DIR}/

echo "Checking out gh-pages branch into public"
git worktree add -B master ${PUBLIC_DIR} origin/master

echo "Removing existing files"
rm -rf ${PUBLIC_DIR}/*

echo "Generating site..."
make render

echo "Updating gh-pages branch"
cd ${PUBLIC_DIR}
git add --all
git commit -m "Publishing to gh-pages (publish.sh)"
git push origin master
