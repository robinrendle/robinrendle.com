<?php snippet('header') ?>

<section role="main">
    <article>
    <?php $essays = $pages->find('essays'); ?>
    <?php $featured = $essays->children()->last(); ?>

        <?php $hero = $featured->images()->find ( html($featured->hero()) ) ?>

        <?php if ($featured->images()->find ( html($featured->hero()) ) ) : ?>
            <figure class="hero">
                <img src="<?php echo $hero->url() ?>" alt="<?php echo $hero->title() ?>" />
            </figure>
        <?php endif ?>

        <header class="<?php echo $featured->header() ?>">
            <h1 class="hero"><?php echo $featured->title() ?></h1>
            <div class="meta">
                <p>By Robin Rendle</p>
                <time datetime="<?php echo $featured->date ?>"><?php echo $featured->season ?></time>
            </div>
        </header>

        <?php echo markdown($featured->excerpt()) ?>
        <?php echo markdown($featured->text()) ?>

        <?php if ($featured->meta()) { ?>
            <footer class="about">
                <?php echo markdown($featured->meta()) ?>
            </footer>
        <?php } ?>


    </article>
</section>

<?php snippet('footer') ?>
