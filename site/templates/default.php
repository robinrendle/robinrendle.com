<?php snippet('header') ?>

<section role="main">
    <article class="container">
        <header class="<?php echo $page->header() ?>">
            <h1><?php echo html($page->title()) ?></h1>
        </header>

        <?php echo markdown($page->excerpt()) ?>
        <?php echo markdown($page->text()) ?>

        <?php if ($page->meta()) { ?>
            <footer class="about">
                <?php echo markdown($page->meta()) ?>
            </footer>
        <?php } ?>
    </article>
</section>

<?php snippet('footer') ?>