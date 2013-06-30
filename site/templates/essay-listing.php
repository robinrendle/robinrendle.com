<?php snippet('header') ?>

<section role="main">

    <header class="title">
        <h1>Essays &amp; Articles</h1>
    </header>

    <section class="essays item-list">
        <?php foreach($page->children()->visible()->flip() as $article): ?>
            <article class="container item-list__item item-list__item--essays">
                <header class="hgroup">
                    <h3>
                        <a href="<?php echo $article->url() ?>">
                            <?php echo html($article->title()) ?>
                        </a>
                    </h3>

                    <div class="meta">
                        <time datetime="<?php echo $article->date ?>"><?php echo $article->season ?></time>
                    </div>
                </header>

                <div class="item-content">
                    <p><?php echo markdown($article->excerpt()) ?></p>
                    <a class="item-content__read-more" href="<?php echo $article->url() ?>">Read more &raquo;</a>
                </div>

            </article>
        <?php endforeach ?>
    </section>

</section>

<?php snippet('footer') ?>