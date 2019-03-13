#!/bin/bash

SITE_ROOT=$(dirname ${BASH_SOURCE[0]})/..
PUBLIC_DIR=public

cd ${SITE_ROOT}

if [[ $(git status -s) ]]; then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Deleting old publication"
rm -rf ${PUBLIC_DIR}
mkdir ${PUBLIC_DIR}
git worktree ${PUBLIC_DIR}
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
