<?php snippet('header') ?>

<section role="main">
    <!-- Big image -->
    <?php $hero = $page->images()->find ( html($page->hero()) ) ?>

    <?php if ($page->hero() ) : ?>
        <figure class="hero">
            <img src="<?php echo $hero->url() ?>" alt="<?php echo $hero->title() ?>" />
        </figure>
    <?php endif ?>

    <article class="container">
        <header class="<?php echo $page->header() ?>">
            <h1><?php echo html($page->title()) ?></h1>
        </header>

        <?php echo markdown($page->text()) ?>
    </article>

</section>

<?php snippet('footer') ?>