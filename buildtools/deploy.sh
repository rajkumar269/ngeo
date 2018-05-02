#!/bin/bash -ex

if [[ ${GIT_BRANCH} =~ "/" ]]
then
  echo "Skipping deploy of external branch ${GIT_BRANCH}"
  exit
fi

# Cloning gh-pages into a local temporary directory
TMP=".build/ngeo-${GITHUB_USERNAME}-gh-pages"
git clone --single-branch gh-pages $(GIT_REMOTE_URL) $TMP

# Cleanup unused
.build/python-venv/bin/python buildtools/cleanup-ghpages.py ${GITHUB_USERNAME} $TMP

mkdir -p $TMP/${GIT_BRANCH}/examples

pushd $TMP
git rm --ignore-unmatch -r --quiet --force ${GIT_BRANCH} || true
popd

cp -r .build/examples-hosted/* $TMP/${GIT_BRANCH}/examples/
cp -r .build/apidoc $TMP/${GIT_BRANCH}/

# Cleanup the git tree by creating a single commit with all content
pushd $TMP
git add -A
git status
FIRST_COMMIT=$(git log --format='%H' | tail -1)
git reset --mixed $FIRST_COMMIT
git commit -a -m 'Latest GitHub pages'
git push ${GIT_REMOTE_NAME} gh-pages -f
popd

# Cleanup
rm -rf $TMP
