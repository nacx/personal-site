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
git worktree add -B gh-pages ${PUBLIC_DIR} origin/gh-pages

echo "Removing existing files"
rm -rf ${PUBLIC_DIR}/*

echo "Generating site..."
hugo

echo "Updating gh-pages branch"
cd ${PUBLIC_DIR}
git add --all
git commit -m "Publishing to gh-pages (publish.sh)"
git push origin gh-pages
