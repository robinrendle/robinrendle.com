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
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/icons/apple-touch-icon-144.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/icons/apple-touch-icon-144.png">

        <!-- For all browsers -->
        <?php echo css('/assets/css/screen.css') ?>
        <link rel="stylesheet" media="print" href="/assets/css/print.css">
        <!--[if IE]><link href="/public/css/ie.css" rel="stylesheet" /><![endif]-->

        <!-- WebType fonts -->
        <link href="//cloud.webtype.com/css/4d2bc22e-add9-4624-b921-366855a4f74c.css" rel="stylesheet" type="text/css" />

        <!-- Modernizr -->
        <script src="/assets/js/modernizr-2.5.3-min.js"></script>

        <script type="text/javascript">
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-23646969-1']);
            _gaq.push(['_trackPageview']);

            (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
        </script>
    </head>

    <body class="<?php echo html($page->title()) ?>">

        <header role="banner">
            <figure class="avatar">
                <a href="/"><img src="/assets/images/logo/campfire.jpg"/></a>
            </figure>
        </header>