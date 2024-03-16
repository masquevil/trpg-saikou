#!/bin/sh
# 复制 local/*.example.ts 到 local/*.ts

for file in src/local/*.example.ts
do
  new_file=$(echo "$file" | sed 's/\.example\.ts/\.ts/')
  cp "$file" "$new_file"
done
