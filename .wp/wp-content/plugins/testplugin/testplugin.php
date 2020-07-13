<?php
/*
Plugin Name: Database setup
Description: set up database practice
Author: JT
*/

// defined( 'ABSPATH' ) or die( 'Unauthorized Acccess' );

require plugin_dir_path(__FILE__) . 'includes/set-database.php';
require plugin_dir_path(__FILE__) . 'includes/seed.php';
require plugin_dir_path(__FILE__) . 'includes/set-custom-post-type.php';

function initial() {
  // database_initial();
  // database_seed();
  // cptui_register_my_cpts_toy();
  add_post_meta(50, 'post_object', 69);
  add_post_meta(32, 'post_object', 69);

}

function deactivate() {
  // deactivated('players');
  // deactivated('teams');
}

function deactivated($tablename) {
  global $wpdb;
  $table  = $wpdb->prefix . $tablename;
  $delete = $wpdb->query("DROP TABLE $table");
  // $delete = $wpdb->query("TRUNCATE TABLE $table");
}

register_activation_hook( __FILE__ , 'initial' );
register_deactivation_hook( __FILE__ , 'deactivate' );

function create_post_type() {
  register_post_type( 'acme_product',
      array(
          'labels' => array(
              'name' => __( 'Products' ),
              'singular_name' => __( 'Product' )
          ),
          'public' => true,
          'has_archive' => true,
          'supports' => array( 'title', 'editor', 'custom-fields' )
      )
  );
}
