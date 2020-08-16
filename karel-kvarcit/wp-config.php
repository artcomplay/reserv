<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'karel-kvarcit' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '2A6lYSb(XX5^w?pRz2O~?nw)dI]3*M2_457%{+dQ$Z?G;Uw5X{y;L`ow?5e;?%R4' );
define( 'SECURE_AUTH_KEY',  '!eXv]v{UsjMM5r[m2w+gpmp.&s={U#rB`1dm^]t;%d7@d2^_Phy0xJ?+UH|o%R4#' );
define( 'LOGGED_IN_KEY',    'x$jfQuB_!=%_QNO,+.90{QcOh`hJpy~l(WYdbAbb%$}YKJd}(6-U{|KAoZo^$[W?' );
define( 'NONCE_KEY',        'yaH?@!3B=r1-7fp.={?KDw]{3:3OIB8:.#&7qJM;@~.fSwEE!MMz[>M/tz#}! rm' );
define( 'AUTH_SALT',        '~+dWK3u)$kf/jx?ccG:g.FMv1^z/:nr,W~_=j^,$,8{z!o`{au+qUt+EP43|xgV_' );
define( 'SECURE_AUTH_SALT', 'H^:C9%BCAkR<z.To3#,z>Z-F`m<,-LG~#T=BIo}{QWA:LOMv[~RgN4z<g|EMQ%QO' );
define( 'LOGGED_IN_SALT',   'Gnb8Ak`t1:n)]*N~L,.wt-F8Yn0|[rmtq.~Zqazi,];lZ)M~ 1.BpJ[*G;/2:yQ^' );
define( 'NONCE_SALT',       'QwK,.%15Pr)o6GQ;AV?k(Lt<Sg1S0]4@0vy9TyHj<`VIM,#j,{hf3h=s*5p1+Vy:' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
