# Markdown-frontmatter-modifier
This codes help to modify frontmatter 'category','title','date'. you can add on another form

## why I made?

whenever I migrate my markdown blog, the frontmatter wasn't fit for the next platform.
GatsbyJs to Jekyll, Jekyll to CRA, CRA to NextJs's blog starter kit...
That was so difficult to throw away all my articles and posts.
So tried to build a small program.

## How it works?

read a file > check the '---' '---' by indexOf > searching for specific frontmatter such as 'title', and 'date' > if there is no frontmatter, insert a line which made up of its file path. That's it!

## replacer-a-md.js

is for a single markdown file.

## replacer.js

is for modifying all included markdown files in a folder.
That can change my an execution as it contains 'for loop'

## usage

`node replacer.js` or
`node replacer-a-md.js`


