
# [robinrendle.com](http://robinrendle.com)

This is where I work in public.

## Setup

Before I get to start writing I do the following in the CL:  

```
blog title
```

This will use the following bash function and make a new post in my post directory with today’s date and the title:

```
function blog() {
IFS='' read -r -d '' String <<"EOF"
---
title:
date:
city:
country:
categories:
tags:
extract:
---
EOF

URL="~/workspace/rr.com/_posts/$(date +%Y-%m-%d-)${1}.md"

cd ~/workspace/rr.com/_posts && touch `date +%Y-%m-%d-`$1.md && echo "${String}" >> $_ && a $URL
}
```

From there I have an Alfred extension that adds in the date, although I should probably update this script to do that and add the title automagically. The final part of that script will load it up in Atom  
