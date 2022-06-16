---
layout: layouts/note.njk
title: The Best Debugging Story I’ve Ever Heard
date: 2019-01-25 09:28:00 -08:00
extract: Patience and discipline and coffee.
city: San Francisco
country: California
---

I love [this story about debugging](http://patrickthomson.tumblr.com/post/2499755681/the-best-debugging-story-ive-ever-heard) so dang much that I want a whole television series about these sorts of issues:

> The technicians, despite their best efforts, could not reproduce the bug in test settings: this bug seemed only to happen in the middle of large print jobs. So, on the off chance that this was a hardware issue, they replaced everything they could - the RAM, the microcontroller, the disk drive, every conceivable part of the tape drive - but the problem kept happening.
>
> So the technicians phoned up headquarters and called in The Expert.
>
> The Expert got a chair and a cup of coffee and sat in the computer room – these were the days when they had rooms specifically dedicated to computers, after all – and watched it as the attendants queued up a large print job. He waited until it crashed - which it did. Everybody looked to The Expert – and he didn’t have a clue what was causing it. So he ordered that the job be queued up again, and all the attendants and technicians went back to work.
>
> The Expert sat down in his chair again, waiting for it to crash. It took something like six hours of waiting, but it crashed again. He still had no idea what was causing it, other than the fact that it happened when the room was crowded. He ordered that the job be restarted, and he sat down again and waited.

This story suggests that in order to debug a system effectively we shouldn’t rush into the codebase; we should instead watch it all crash and burn. And then we should watch the system crash again. And again.

The only thing we can bring to the table is a little patience, a hefty dose of discipline, and an enormous bucket of coffee.
