<?php

$articles = $pages->children()->visible()->flip()->limit(10);

snippet('feed', array(
  'link'  => url('blog'),
  'items' => $articles,
  'descriptionField'  => 'text',
  'descriptionLength' => false
));

?>