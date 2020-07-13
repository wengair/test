<?php

function database_initial() {
  global $wpdb;
  require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
  //* Create the teams table
  $table_name = $wpdb->prefix . 'ProjectProcessList';
  $charset_collate = $wpdb->get_charset_collate();
  $sql = "CREATE TABLE $table_name (
  team_id INTEGER NOT NULL AUTO_INCREMENT,
  team_name TEXT NOT NULL,
  team_city TEXT NOT NULL,
  team_state TEXT NOT NULL,
  team_stadium TEXT NOT NULL,
  team_pic TEXT NOT NULL,
  update_time datetime DEFAULT '00-00-0000 00:00:00' NOT NULL,
  PRIMARY KEY (team_id)
  ) $charset_collate;";
  dbDelta( $sql );

  // //* Create the teams table
  // $table_name = $wpdb->prefix . 'teams';
  // $charset_collate = $wpdb->get_charset_collate();
  // $sql = "CREATE TABLE $table_name (
  // team_id INTEGER NOT NULL AUTO_INCREMENT,
  // team_name TEXT NOT NULL,
  // team_city TEXT NOT NULL,
  // team_state TEXT NOT NULL,
  // team_stadium TEXT NOT NULL,
  // team_pic TEXT NOT NULL,
  // update_time datetime DEFAULT '00-00-0000 00:00:00' NOT NULL,
  // PRIMARY KEY (team_id)
  // ) $charset_collate;";
  // dbDelta( $sql );
  
  // $table_name2 = $wpdb->prefix . 'players';
  // $charset_collate = $wpdb->get_charset_collate();
  // $sql2 = "CREATE TABLE $table_name2 (
  // player_id INTEGER NOT NULL AUTO_INCREMENT,
  // player_name TEXT NOT NULL,
  // player_city TEXT NOT NULL,
  // player_state TEXT NOT NULL,
  // team_id INTEGER NOT NULL,
  // update_time datetime DEFAULT '00-00-0000 00:00:00' NOT NULL,
  // PRIMARY KEY (player_id),
  // FOREIGN KEY (team_id) REFERENCES wp_teams (team_id) 
  // ) $charset_collate;";
  // dbDelta( $sql2 );
}