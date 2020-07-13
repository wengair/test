<?php
function cptui_register_my_cpts_toy() {

	/**
	 * Post Type: toys.
	 */

	$labels = [
		"name" => __( "toys", "twentytwenty" ),
		"singular_name" => __( "toy", "twentytwenty" ),
		"menu_name" => __( "My toys", "twentytwenty" ),
		"all_items" => __( "All toys", "twentytwenty" ),
		"add_new" => __( "Add new", "twentytwenty" ),
		"add_new_item" => __( "Add new toy", "twentytwenty" ),
		"edit_item" => __( "Edit toy", "twentytwenty" ),
		"new_item" => __( "New toy", "twentytwenty" ),
		"view_item" => __( "View toy", "twentytwenty" ),
		"view_items" => __( "View toys", "twentytwenty" ),
		"search_items" => __( "Search toys", "twentytwenty" ),
		"not_found" => __( "No toys found", "twentytwenty" ),
		"not_found_in_trash" => __( "No toys found in trash", "twentytwenty" ),
		"parent" => __( "Parent toy:", "twentytwenty" ),
		"featured_image" => __( "Featured image for this toy", "twentytwenty" ),
		"set_featured_image" => __( "Set featured image for this toy", "twentytwenty" ),
		"remove_featured_image" => __( "Remove featured image for this toy", "twentytwenty" ),
		"use_featured_image" => __( "Use as featured image for this toy", "twentytwenty" ),
		"archives" => __( "toy archives", "twentytwenty" ),
		"insert_into_item" => __( "Insert into toy", "twentytwenty" ),
		"uploaded_to_this_item" => __( "Upload to this toy", "twentytwenty" ),
		"filter_items_list" => __( "Filter toys list", "twentytwenty" ),
		"items_list_navigation" => __( "toys list navigation", "twentytwenty" ),
		"items_list" => __( "toys list", "twentytwenty" ),
		"attributes" => __( "toys attributes", "twentytwenty" ),
		"name_admin_bar" => __( "toy", "twentytwenty" ),
		"item_published" => __( "toy published", "twentytwenty" ),
		"item_published_privately" => __( "toy published privately.", "twentytwenty" ),
		"item_reverted_to_draft" => __( "toy reverted to draft.", "twentytwenty" ),
		"item_scheduled" => __( "toy scheduled", "twentytwenty" ),
		"item_updated" => __( "toy updated.", "twentytwenty" ),
		"parent_item_colon" => __( "Parent toy:", "twentytwenty" ),
	];

	$args = [
		"label" => __( "toys", "twentytwenty" ),
		"labels" => $labels,
		"description" => "actions of toys",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => true,
		"rewrite" => [ "slug" => "toy", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "editor", "thumbnail", "author" ],
		"taxonomies" => [ "category", "post_tag" ],
	];

	register_post_type( "toy", $args );
}

add_action( 'init', 'cptui_register_my_cpts_toy' );
