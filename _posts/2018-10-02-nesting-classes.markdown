---
title: Nesting Classes
date: 2018-10-02 23:07:00 -07:00
extract: Nesting classes in Sass is maybe not such a great idea. There, I said it!
---

The other day [Brad Frost asked](https://twitter.com/brad_frost/status/1046813109481091072) which one of these two methods you would make a new class with if you were writing Sass:

```
.c-btn { }
.c-btn__icon { }

/* or */

.c-btn {
	&__icon {	}
}
```

The thread that branches off that original tweet is great since folks explore alternatives to these two options and the pros and cons for each.

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
