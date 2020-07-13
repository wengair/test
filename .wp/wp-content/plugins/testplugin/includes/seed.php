<?php
function database_seed() {
  global $wpdb;
  $table_name = $wpdb->prefix . 'teams';
  $table_name2 = $wpdb->prefix . 'players';

  $teamname = array("Determined Hippos", "Stark Spikes", "Storm Asteroids", "Pure Sabretooths", "Fantastic Wombats", "Wise Ostriches", "Bold Penguins", "Grave Demons", "Exalted Sparrows", "Fast Cubs");
  $playername = array("Nate Dale","Aadam Hudson","Otto Rowe","Charles Rowland","Melody Zimmerman","Mckenzie Barnes","Amayah Wheeler","Reggie Yoder","Jordan Bailey","Aliesha Cartwright");
  $city = array("Omaha", "Baltimore", "Phoenix", "Santa Ana", "Seattle", "Anchorage");
  $state = array("Nebraska","Maryland","Arizona","California","Washington","Alaska");
  $stadium = array("Phantom Park","Element Arena","Particle Bowl","Mosaic Centre","Pinnacle Park","Obelisk Stadium","Vertex Centre","Borealis Park","Prestige Centre","Phoenix Centre");

  for ($i = 0; $i < 5; $i++) {
    $n = rand(0, count($city)-1);
    $wpdb->insert(
      $table_name,
      array(
        team_name => $teamname[rand(0, count($teamname)-1)],
        team_city => $city[$n],
        team_state => $state[$n],
        team_stadium => $stadium[rand(0, count($stadium)-1)],
        team_pic => 'https://picsum.photos/200',
        update_time => current_time( 'mysql' )
      )
    );
    for ($j = 0; $j < 10; $j++) {
      $k = rand(0, count($city)-1);
      $wpdb->insert(
        $table_name2,
        array(
          player_name => $playername[rand(0, count($playername)-1)],
          player_city => $city[$k],
          player_state => $state[$k],
          team_id => $i,
          update_time => current_time( 'mysql' )
        )
      );  
    }
  }
}