#!/bin/bash
# 复制 local/*.example.ts 到 local/*.ts

for file in src/local/*.example.ts
do
  cp "$file" "${file//.example.ts/.ts}"
done
