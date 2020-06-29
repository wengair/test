<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dev');

/** MySQL database username */
define( 'DB_USER', 'dev');

/** MySQL database password */
define( 'DB_PASSWORD', 'dev');

/** MySQL hostname */
define( 'DB_HOST', 'db:3306');

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '521831eace047636a9e1409becb68e0dc260dd8a');
define( 'SECURE_AUTH_KEY',  '563861346289ff85829328c307fe35a45b5757f2');
define( 'LOGGED_IN_KEY',    '203f8aa5c8e9b9f571fc6bf0fef37b5451b94867');
define( 'NONCE_KEY',        '3cb4bd6b264679b2e7960ed03518b78a2a526345');
define( 'AUTH_SALT',        '1d87f4bc7c3bce086b9bb2201c55d0059cced711');
define( 'SECURE_AUTH_SALT', 'f4c8fd18a1ab237afb6fffa139464b4230567454');
define( 'LOGGED_IN_SALT',   'b6327ff655ab2b617469e0d8980f3e251d6e3877');
define( 'NONCE_SALT',       '9672c8a12079bfc4279b719398859f28878b0014');

define('JWT_AUTH_SECRET_KEY', 'yFvFaXx93{E-h(-Z$Q4rNl2m|SS$53|o V(W+Kw(2+%.I#$AITJk63][}]_-4Qzc');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

// If we're behind a proxy server and using HTTPS, we need to alert WordPress of that fact
// see also http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
	$_SERVER['HTTPS'] = 'on';
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
