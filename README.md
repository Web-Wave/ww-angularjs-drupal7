# ww-angularjs-drupal7
A custom module for drupal 7, this is an example module for use angularjs in a drupal 7 Website.

The AngularJS script get date from an api and create a custom object to insert into your tpl file.
The module file create a custom route for you and he scan your drupal js files and insert AngularJS library if it's necessary.

# How add this block to your tpl file ?
You can use the Drupal backend to place your block into the correct region or use this code to add the block in your tpl file :
```
$ww_angularjs_drupal7 = module_invoke('ww_angularjs_drupal7', 'block_view', 'ww_angularjs_drupal7');
if(isset($ww_angularjs_drupal7) && !empty($ww_angularjs_drupal7)){
	print $ww_angularjs_drupal7['content'];
}
```
