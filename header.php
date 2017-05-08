<?php 
//Main Functions
require_once('resources/functions.php'); 

//HTML Data
$htmlData = array('lang'=>'en',
				  'charset'=>'utf-8',
				  'title'=>'Website Base',
				  'mobile-capable'=>'yes',
				  'viewport'=>'width=device-width, initial-scale=1, user-scalable=no',
				  'nav-color'=>'#333333',
				  'nav-color-apple'=>'black',
				  'description'=>'Website based on Bootstrap with some CSS/JS/PHP improvements',
				  'keywords'=>'html, jquery, javascript, php, responsive, css3',
				  'author'=>'TriForce');
?>
<!DOCTYPE html>
<html lang="<?php echo $htmlData['lang']; ?>">
<head>
<title><?php echo $htmlData['title']; ?> &raquo; <?php echo get_siteinfo('page'); ?></title>
<meta charset="<?php echo $htmlData['charset']; ?>">
<!-- Mobile Enable -->
<meta name="mobile-web-app-capable" content="<?php echo $htmlData['mobile-capable']; ?>">
<meta name="apple-mobile-web-app-capable" content="<?php echo $htmlData['mobile-capable']; ?>">
<meta name="viewport" content="<?php echo $htmlData['viewport']; ?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- Nav Bar Mobile Color -->
<meta name="theme-color" content="<?php echo $htmlData['nav-color']; ?>">
<meta name="msapplication-navbutton-color" content="<?php echo $htmlData['nav-color']; ?>">
<meta name="apple-mobile-web-app-status-bar-style" content="<?php echo $htmlData['nav-color-apple']; ?>">
<!-- Meta Details -->
<meta name="description" content="<?php echo $htmlData['description']; ?>"/>
<meta name="keywords" content="<?php echo $htmlData['keywords']; ?>" />
<meta name="author" content="<?php echo $htmlData['author']; ?>" />
<!-- Tab & App Icons -->
<link href="<?php echo get_siteinfo('url'); ?>/img/favicon.png" rel="shortcut icon">
<link href="<?php echo get_siteinfo('url'); ?>/img/favicon-apple.png" rel="apple-touch-icon"/>
<!-- Bootstrap core CSS -->
<link href="<?php echo get_siteinfo('url'); ?>/css/bootstrap.min.css" rel="stylesheet">
<!-- Bootstrap theme -->
<link href="<?php echo get_siteinfo('url'); ?>/css/bootstrap-theme.min.css" rel="stylesheet">
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<link href="<?php echo get_siteinfo('url'); ?>/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
<!-- jQuery UI CSS (Rename "images-dark" folder to "image" in css to use dark theme) -->
<link href="<?php echo get_siteinfo('url'); ?>/css/jquery-ui.css" rel="stylesheet">
<link href="<?php echo get_siteinfo('url'); ?>/css/jquery-ui.structure.css" rel="stylesheet">
<link href="<?php echo get_siteinfo('url'); ?>/css/jquery-ui.theme-light.css" rel="stylesheet">
<!-- Bootstrap Data Tables -->
<link href="<?php echo get_siteinfo('url'); ?>/plugins/datatables/css/jquery.dataTables.min.css" rel="stylesheet">
<!-- LightGallery Lightbox -->
<link href="<?php echo get_siteinfo('url'); ?>/css/lightgallery.css" rel="stylesheet">
<link href="<?php echo get_siteinfo('url'); ?>/css/lg-transitions.css" rel="stylesheet">
<link href="<?php echo get_siteinfo('url'); ?>/css/lg-fb-comment-box.css" rel="stylesheet">
<!-- CSS Dynamic -->
<link href="<?php echo get_siteinfo('url'); ?>/css/style.php?url=<?php echo get_siteinfo('url'); ?>" rel="stylesheet">
<!-- IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
<script src="<?php echo get_siteinfo('url'); ?>/js/html5shiv.min.js"></script>
<script src="<?php echo get_siteinfo('url'); ?>/js/respond.min.js"></script>
<![endif]-->
</head>
<?php if(is_home()): ?>
<body class="isHome">
<?php else: ?>
<body>
<?php endif; ?>
<!-- ================================================= ANALYTICS ================================================= -->
<?php if(is_localhost()): ?>
<?php echo "\n"; //Dont track in localhost ?>
<?php else: ?>
<?php echo "\n"; ?>
<?php endif; ?>
<!-- ================================================= ANALYTICS ================================================= -->

<!-- ================================================= HEADER ================================================= -->
<div class="header">
	<div class="container">
		<!-- HEADER CONTAINER -->
    	
		<!-- HEADER CONTAINER -->
    </div>
</div>
<!-- ================================================= HEADER ================================================= -->