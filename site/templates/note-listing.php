<?php snippet('header') ?>

<section role="main">

    <header class="title container">
        <h1>Quick Notes and Ramblings</h1>
    </header>

    <section class="item-list item-list--notes">
        <?php foreach($page->children()->visible()->flip() as $article): ?>
            <article class="container item-list__item item-list__item--notes">
                <header class="title">
                    <h3>
                        <a href="<?php echo $article->url() ?>">
                            <?php echo html($article->title()) ?>
                        </a>
                    </h3>

                    <div class="meta">
                        <time datetime="<?php echo $article->date ?>"><?php echo $article->season ?></time>
                    </div>
                </header>
            </article>
        <?php endforeach ?>
    </section>

</section>

<?php snippet('footer') ?>