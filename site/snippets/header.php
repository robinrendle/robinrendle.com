<!doctype html>
<html class="no-js" lang="en">

    <head>
        <meta charset="UTF-8">
        <title><?php echo html($site->title()) ?> › <?php echo html($page->title()) ?></title>

        <meta name="author" content="Robin Rendle">
        <meta name="description" content="Robin Rendle is a designer from the UK and this is where he writes about publishing, networks and books.">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="author" href="https://plus.google.com/104389809267012182640">

        <!-- favicons -->
        <link rel="shortcut icon" href="/assets/images/icons/favicon.ico">
        <link rel="shortcut icon" href="/assets/images/icons/favicon.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/assets/images/icons/favicon_144.png">


        <link href="/assets/css/screen.css" rel="stylesheet">

        <link rel="stylesheet" media="print" href="/assets/css/print.css">
        <!-- RSS -->
        <link rel="alternate" type="application/rss+xml" href="<?php echo url('/feed') ?>" title="Essays, articles and notes feed " />
        <!-- Fonts -->
        <link href="//cloud.webtype.com/css/4d2bc22e-add9-4624-b921-366855a4f74c.css" rel="stylesheet" type="text/css" />
        <!-- Modernizr -->
        <script src="/assets/js/modernizr-2.5.3-min.js"></script>
    </head>

    <body class="<?php echo html($page->title()) ?>">

        <header role="banner">
            <figure class="avatar">
                <a href="/"><img src="/assets/images/logo/campfire.jpg"/></a>
            </figure>
        </header>