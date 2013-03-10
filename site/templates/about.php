<?php snippet('header') ?>

<section role="main">
    <!-- Big image -->
    <?php $hero = $page->images()->find ( html($page->hero()) ) ?>

    <?php if ($page->images()->find ( html($page->hero()) ) ) { ?>
        <figure class="hero">
            <img src="<?php echo $hero->url() ?>" alt="<?php echo $hero->title() ?>" />
        </figure>
    <?php } ?>

    <header class="hero">
        <h1><?php echo html($page->title()) ?></h1>
    </header>

    <?php echo markdown($page->text()) ?>

</section>

<?php snippet('footer') ?>