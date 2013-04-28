<?php snippet('header') ?>

<section role="main">

    <header class="listing">
        <h1>Quick Notes and Ramblings</h1>
    </header>

    <section class="listing notes">
        <?php foreach($page->children()->visible()->flip() as $article): ?>
            <article class="container">
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
            </article>
        <?php endforeach ?>
    </section>

</section>

<?php snippet('footer') ?>