---
layout: layouts/post.njk
title: Nesting Classes in Sass
date: 2018-10-02 23:07:00 -07:00
city: San Francisco
country: California
extract: Nesting classes in Sass is maybe not such a great idea. There, I said it!
---

The other day [Brad Frost asked](https://twitter.com/brad_frost/status/1046813109481091072) how you would make a new class with Sass and he gave two options that look like this:

```
.c-btn {}
.c-btn__icon {}

/* or */

.c-btn {
  &__icon {}
}
```

The thread that branches off that original tweet is great since folks explore alternatives to these two options and the pros and cons for each which is neat.

Personally though? I prefer the 1st option, only because I find it easier to search for in the codebase and it makes things a little bit more future proof. If you have a new bit of functionality to add quickly then you can just make a new class. Otherwise I’ve found in the past that nesting classes within one another can shortly make the code really difficult to read and debug.

Also, my pal Hector Virgen mentioned that this is how he would do it:

```
.c {
  &- {
    &b {
      &t {
        &n {
          // good luck finding this!!
        }
      }
    }
  }
}
```

And now I have shared the curse with you.
