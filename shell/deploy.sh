#!/bin/bash

git co deploy
git reset master --hard
git push -f
git co master
