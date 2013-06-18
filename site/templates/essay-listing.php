<?php snippet('header') ?>

<section role="main">

    <header class="listing">
        <h1>Essays &amp; Articles</h1>
    </header>
    <section class="essays block-list">
        <?php foreach($page->children()->visible()->flip() as $article): ?>
            <article class="container block-list--item">
                <header>
                    <h3>
                        <a href="<?php echo $article->url() ?>">
                            <?php echo html($article->title()) ?>
                        </a>
                    </h3>

                    <div class="meta">
                        <time datetime="<?php echo $article->date ?>"><?php echo $article->season ?></time>
                    </div>
                </header>

                <div class="content">
                    <p><?php echo markdown($article->excerpt()) ?></p>
                    <a href="<?php echo $article->url() ?>">Read more &raquo;</a>
                </div>

            </article>
        <?php endforeach ?>
    </section>

</section>

<?php snippet('footer') ?>