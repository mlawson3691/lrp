<?php

/**
* @file
* Default simple view template to display a list of rows.
*
* @ingroup views_templates
*/
?>
<?php if (!empty($title)): ?>
    <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
    <div <?php if (!empty($view->result[$id]->nid)) { print 'id="' . $view->result[$id]->nid . '"'; } ?> class="clickable-store-item <?php if ($classes_array[$id]) { print $classes_array[$id]; } ?>">
        <?php print $row; ?>
    </div>
<?php endforeach; ?>
