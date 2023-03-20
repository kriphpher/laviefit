<?php
/** 
 * As configurações básicas do WordPress.
  *
  * Esse arquivo contém as seguintes configurações: configurações de MySQL, Prefixo de Tabelas,
  * Chaves secretas, Idioma do WordPress, e ABSPATH. Você pode encontrar mais informações
  * visitando {@link http://codex.wordpress.org/Editing_wp-config.php Editing
  * wp-config.php} Codex page. Você pode obter as configurações de MySQL de seu servidor de hospedagem.
  *
  * Esse arquivo é usado pelo script ed criação wp-config.php durante a
  * instalação. Você não precisa usar o site, você pode apenas salvar esse arquivo
  * como "wp-config.php" e preencher os valores.
  *
  * @package WordPress
  */
 // ** Configurações do MySQL - Você pode pegar essas informações com o serviço de hospedagem ** //

/** O nome do banco de dados do WordPress */

define('FEATURED_GALLERY_POST_TYPES', [ 'servicos' ] );

define( 'WP_AUTO_UPDATE_CORE', true );

/** O nome do banco de dados do WordPress */
define('DB_NAME', 'sigsolutions');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'sigsolutio_add1');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', 'G4qm3Vr0KnJjMq');

/** nome do host do MySQL */
define('DB_HOST', 'mysql63-farm2.uni5.net');

/** Conjunto de caracteres do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8');

/** O tipo de collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');


/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Você pode alterá-las a qualquer momento para desvalidar quaisquer cookies existentes. Isto irá forçar todos os usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */

define('AUTH_KEY',         'IIB+,<gxS0RTwsCQr^gj0W-x18y+^e>bvfw&U<K{`icrghJWI&-5N)nfN[,{bvP#');
define('SECURE_AUTH_KEY',  ')_KW0<iU yAp^=p7{2VyaNdu655>3A20Rl*b0m&;UJ~UYzMI(4}GJQoZ-+>+TYjl');
define('LOGGED_IN_KEY',    'w%Qa8r}>>(0gLW+ ..<r(N1k!1g^6z~,(8]>qn6twU5fZPGaEXH]zay|q2(G+QW!');
define('NONCE_KEY',        ';8d pLMn:@2]3:-EHwS3$(]E5PKZn1,$MFG?XRc]{U**RnP8/dDM+9]iAM6+TXTn');
define('AUTH_SALT',        'iL_$CW){Isvf09p+/JC=F$g>oGjd:9m6-Nu&;%(%Q=EWbaX7C+h#ebPt,8w~HUcX');
define('SECURE_AUTH_SALT', 'LvDnU!,$0<K{Tn_-.[MB{Nq?u&xdR;M^-M@;SSz3F4eYhL!M&t76e0D+fo,=P&Yp');
define('LOGGED_IN_SALT',   '/+D}S --V,!/(a7WzEq_]6^07-&5D2mK xJ`lZll{JR0p6&[(=+{:|hhh6$ysHjs');
define('NONCE_SALT',       '#M+|m PZ49U,|E0%Z[}GZCF[Q[{fn{wH<{q=d3lK@nMWbP]I_OGf7px}_/`ITk4|');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'site_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://codex.wordpress.org/pt-br:Depura%C3%A7%C3%A3o_no_WordPress
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis e arquivos do WordPress. */
require_once(ABSPATH . 'wp-settings.php');
