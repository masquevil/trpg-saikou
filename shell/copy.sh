#!/bin/bash
# 复制 local/*.example.ts 到 local/*.ts

for file in `ls src/local/*.example.ts`
do
  cp $file `echo $file|sed  's/.example.ts/.ts/'`
done
