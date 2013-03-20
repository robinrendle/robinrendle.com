<?php snippet('header') ?>

<section role="main">

    <?php $hero = $page->images()->find ( html($page->hero()) ) ?>

    <?php if ($page->hero() ) : ?>
        <figure class="hero">
            <img src="<?php echo $hero->url() ?>" alt="<?php echo $hero->title() ?>" />
        </figure>
    <?php endif ?>

    <!-- Main content -->
    <article>
        <header class="<?php echo $page->header() ?>">
            <h1><?php echo html($page->title()) ?></h1>
            <div class="meta">
                <p>By Robin Rendle</p>
                <time datetime="<?php echo $page->date ?>"><?php echo $page->season ?></time>
            </div>
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