#!/bin/bash

# Script to scaffold a markdown file with frontmatter
# Usage: ./create_chapter.sh <article-path> <title> <order>

# Check if all arguments are provided
if [ $# -ne 3 ]; then
    echo "Usage: $0 <article-path> <title> <order>"
    exit 1
fi

ARTICLE_PATH=$1
TITLE=$2
ORDER=$3

# Format the order with leading zero if it's a single digit
FORMATTED_ORDER=$(printf "%02d" $ORDER)

# Convert title to kebab-case for filename
FILENAME=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

# Create the directory if it doesn't exist
DIRECTORY="./src/articles/$ARTICLE_PATH"
if [ ! -d "$DIRECTORY" ]; then
    mkdir -p "$DIRECTORY"
    echo "Created directory: $DIRECTORY"
fi

# Format the title with proper capitalization
FORMATTED_TITLE=$(echo "$TITLE" | tr '_' ' ' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2)} 1')

# Create the file path
FILE_PATH="$DIRECTORY/$FORMATTED_ORDER-$FILENAME.md"

# Create the file with frontmatter
cat > "$FILE_PATH" << EOF
---
title: $FORMATTED_TITLE
order: $ORDER
---

EOF

echo "Created markdown file: $FILE_PATH"

