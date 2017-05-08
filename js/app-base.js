/* ================================================= FUNCTIONS ================================================= */

var mainUrl = "@global-url";
var isHome;
var isMovil;
var isOldIE;
var isChrome;
var isExplorer;
var isExplorer6;
var isExplorer7;
var isExplorer8;
var isFirefox;
var isSafari;
var isOpera;

$.fn.hasAttr = function(name) {  
   return this.attr(name) !== undefined;
};
$.fn.outerHeight2 = function () {
	return this[0].getBoundingClientRect().height;
};
$.fn.outerWidth2 = function () {
	return this[0].getBoundingClientRect().width;
};
function toBoolean(value) {
    var strValue = String(value).toLowerCase();
    strValue = ((!isNaN(strValue) && strValue !== '0') &&
        strValue !== '' &&
        strValue !== 'null' &&
        strValue !== 'undefined') ? '1' : strValue;
    return strValue === 'true' || strValue === '1' ? true : false
};

//'@screen-small-phone' => '320', 
//'@screen-medium-phone' => '360',
//'@screen-phone' => '480',
//'@screen-tablet' => '768',
//'@screen-desktop' => '992',  
//'@screen-widescreen' => '1200', 
//'@screen-full-hd' => '1920', 

function responsiveCode() {
	var bodyWidth = document.body.clientWidth; //$(window).width();
	var bodyHeight = $(window).height();
	var bodyOrientation = bodyWidth > bodyHeight ? true : false;

	if (bodyWidth)
	{
	//*********
		
		//*** RESPONSIVE CHANGES ***//

		//Example Vertical Align Container
		$("body").each(function(){

			var altoBody = bodyHeight;
			var altoCaja = $(".verticalAlign").outerHeight(); 

			if(altoBody > altoCaja)
			{
				$(".verticalAlign").css({"margin-top": -Math.abs(altoCaja / 2),
										 "position":"absolute",
										 "top":"50%",
										 "width":$(".verticalAlign").parent().width(),
										 "visibility":"visible"});
			}
			else
			{
				$(".verticalAlign").removeAttr("style");
			}
		});
		//Example Vertical Align Container
		
		//*** RESPONSIVE CHANGES ***//
		
		//Send data to event
		$(document).trigger("responsiveCode", [bodyWidth, bodyHeight, bodyOrientation]);

	 //*********
	}else{
		window.setTimeout(ResponsiveCode, 30);
	}

}

$(window).bind("load", responsiveCode);
$(window).bind("resize", responsiveCode);
$(window).bind("orientationchange", responsiveCode);

function getMaxHeight(elems){
    return Math.max.apply(null, elems.map(function ()
    {
        return $(this).outerHeight();
    }).get());
}
function destroyLightGallery(){
	$(".lightgallery").lightGallery().data('lightGallery').destroy(true);
}
function loadLightGallery(){
	
	
	$(".lightgallery").each(function(){ 

		var getMainUrl = mainUrl;
		var galSelectorVal = $(this).attr("lg-selector");
		var galThumbnailVal = $(this).attr("lg-thumbnail");
		var galDownloadVal = $(this).attr("lg-download");
		var galAutoTitle = $(this).attr("lg-autotitle");
		var galGalleryMode = $(this).attr("lg-gallerymode");
		var galLoadThumb = getMainUrl+"/css/lightgallery/lg-loading-icon.gif";
		var galPrevThumb = getMainUrl+"/css/lightgallery/lg-loading-prev.png";
		var galNextThumb = getMainUrl+"/css/lightgallery/lg-loading-next.png";
		
		if(galGalleryMode=="true"){
			$(this).addClass("lightGalleryMode");
		}
		
		if($(".lightgallery.lightGalleryMode .lg-prevthumb").length < 1 && $(".lightgallery.lightGalleryMode .lg-nextthumb").length < 1){
			$(".lightgallery.lightGalleryMode").prepend("<div class='lg-prevthumb' href='"+galLoadThumb+"' title='Cargando página anterior ...'><img src='"+galPrevThumb+"'></div>");
			$(".lightgallery.lightGalleryMode").append("<div class='lg-nextthumb' href='"+galLoadThumb+"' title='Cargando siguiente página ...'><img src='"+galNextThumb+"'></div>");
		}
		
		
		$(".lightgallery").find("img").each(function(){
		
			if($(this).parent().is("a") && !($(this).parent().hasAttr("target")) ){
				$(this).parent().addClass("lg-contentphoto");
			}
			
		});
		
		if(galSelectorVal=="auto"){
			var galSelector = ".lg-contentphoto";
		}
		else{
			var galSelector = galSelectorVal;
		}
		
		if(galAutoTitle!="false"){
			$(this).find(galSelector).not(".lg-prevthumb, .lg-nextthumb").attr("title", galAutoTitle);
		}

		if(galThumbnailVal=="false"){
			var galThumbnail = false;
		}
		else{
			var galThumbnail = true;
		}
		
		if(galDownloadVal=="false"){
			var galDownload = false;
		}
		else{
			var galDownload = true;
		}

		$(this).lightGallery({
			selector: galSelector+", .lg-prevthumb, .lg-nextthumb", 
			thumbnail: galThumbnail,
			download: galDownload,
			loop: false,
		}); 
		
		$(".lightgallery.lightGalleryMode").on('onAfterOpen.lg',function(event){
			console.log("abierta");
			$(".lg-outer .lg-thumb .lg-thumb-item:first-child").addClass("noBorder");
			$(".lg-outer .lg-thumb .lg-thumb-item:last-child").addClass("noBorder");
		});

		$(".lightgallery.lightGalleryMode").on('onAfterSlide.lg',function(event){
			var total = parseInt($("#lg-counter-all").html());
			var actual = parseInt($("#lg-counter-current").html());

			console.log("abierta");
			console.log("total: "+total+" actual: "+actual);

			if(actual == total){
				console.log("cerrando, pagina siguiente");
				$(".lightgallery").addClass("lightGalleryAuto");
				$(".lightgallery").addClass("lightGalleryAutoNext");
				setTimeout(function(){ 
					$(".lg-toolbar .lg-close").trigger("click");
				}, 1500);
			}
			if(actual == 1){
				console.log("cerrando, pagina anterior");
				$(".lightgallery").addClass("lightGalleryAuto");
				$(".lightgallery").addClass("lightGalleryAutoPrev");
				setTimeout(function(){ 
					$(".lg-toolbar .lg-close").trigger("click");
				}, 1500);
			}
		});

		$(".lightgallery.lightGalleryMode").on('onCloseAfter.lg',function(event){
			if($(this).hasClass("lightGalleryAuto")){
				if($(this).hasClass("lightGalleryAutoNext")){
					//Stuff to do on close
					window.location.href = $(".lg-next").attr("href"); //Example Stuff
				}
				else if($(this).hasClass("lightGalleryAutoPrev")){
					//Stuff to do on close
					window.location.href = $(".lg-prev").attr("href"); //Example Stuff
				}
				$(this).removeClass("lightGalleryAuto");
				$(this).removeClass("lightGalleryAutoPrev");
				$(this).removeClass("lightGalleryAutoNext");
			}
		});

	});
}
function autoBackground(container){
	
	var bgData = new Array();
	var bgData = $(container).data("data-autobg").split(',');
	
	if (bgData[2] === undefined || bgData[2] === null)
	{
		bgData[2]="100%";
	}
	
	$(container).find("img").each(function(){
	
		$(this).css('width','auto');
		$(this).css('height','auto');
		$(this).css('min-width','inherit');
		$(this).css('min-height','inherit');
		$(this).addClass('FotosFix');
	
	});
	
	$(container).imgLiquid({ verticalAlign: bgData[0], horizontalAlign: bgData[1] });
	
	if(bgData[2].substr(bgData[2].length - 1, 1) == '%')
	{
		var bgSize = parseInt(bgData[2].replace(/\x25/g, '')); //%
		
		if(bgSize > 100 || bgSize < 100)
		{
			$(container).css("background-size",bgSize+"%");
		}
	}
	else
	{
		if(bgData[2]!="cover")
		{
			$(container).css("background-size",bgData[2]);
		}
	}
	
	$(container).find(".FotosFixInline").each(function(){ //.find("img").not(":first")
		
		$(this).removeClass("FotosFix");
		$(this).removeAttr("style");
	});
}
function onElementHeightChange(elm, callback){
	var lastHeight = $(elm).height(), newHeight;
	(function run(){
		newHeight = $(elm).height();
		if( lastHeight != newHeight )
			callback();
		lastHeight = newHeight;

		if( elm.onElementHeightChangeTimer )
		  clearTimeout(elm.onElementHeightChangeTimer);

		elm.onElementHeightChangeTimer = setTimeout(run, 200);
	})();
	
	//Example
	/*if($(".container").length > 0)
	{
		onElementHeightChange(".container", function(){
			console.log('Container height has changed');
			responsiveCode();
		});
	}*/
}
function TitleFix(Contenedor){
	$(Contenedor).each(function(){
		$(this).addClass("ellipsis");
		$(this).html("<span>"+$(this).html()+"</span>");
	});
}
function TextoFix(Contenedor, Maximo){

	$(Contenedor).each(function ( i, box ) {

		var width = $( box ).width(),
			html = '<span style="white-space:nowrap"></span>',
			line = $( box ).wrapInner( html ).children()[ 0 ],
			n = Maximo;

		$( box ).css( 'font-size', n );

		while ( $( line ).width() > width ) {
			$( box ).css( 'font-size', --n );

		}

		$( box ).text( $( line ).text() );

		//Example
		//TextoFix(".container", 40); //Real Size in pixels

	});
}
function showAlert(title,text,size){
	
	if(typeof size === 'undefined' || size === null){
		size = 'medium';
	}
	
	//Bootbox alert
	bootbox.alert({
		title: title,
        message: text,
        size: size,
		backdrop: true
    }).on("shown.bs.modal", function(){
		//Disable button auto-focus
		$(".modal .modal-footer .btn:focus").blur();
	});
	
	//Bootbox prompt
	/*bootbox.prompt({
		  title: "What is your real name?",
		  //value: "makeusabrew",
		  callback: function(result) {
				if (result === null) {
				  $('#alert').show("Prompt dismissed");
				} else {
				  $('#alert').show("Hi <b>"+result+"</b>");
				}
		  }
	});*/

	//Bootbox confirm
	/*bootbox.confirm({ 
		message: "¿Seguro que desea eliminar a este alumno?", 
		callback: function(result) {
			if (result == false) {
				$('#alert').show("Prompt dismissed");
			} else {
				$('#alert').show("Hi <b>"+result+"</b>");
			}
		}
	});*/
	
}
function youTubeParser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
	
	// http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index
	// http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o
	// http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0
	// http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s
	// http://www.youtube.com/embed/0zM3nApSvMg?rel=0
	// http://www.youtube.com/watch?v=0zM3nApSvMg
	// http://youtu.be/0zM3nApSvMg
}
function vimeoParser(url){
    var regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
    var match = url.match(regExp);
    return match[5];
	
	// http://vimeo.com/*
	// http://vimeo.com/channels/*/*
	// http://vimeo.com/groups/*/videos/*
}
function videoLaunch(url, share, title){
	
	if(typeof share === 'undefined' || share === null){
		share = false;
	}
	
	if(typeof title === 'undefined' || title === null){
		title = null;
	}
	
	
	if (url.indexOf('youtube') >= 0){
		var ID = youTubeParser(url);
		var embedUrl = 'https://www.youtube.com/embed/'+ID+'?rel=0';
		var embedShare = 'https://www.youtube.com/watch?v='+ID;
	}
	else if (url.indexOf('vimeo') >= 0){
		var ID = vimeoParser(url);
		var embedUrl = 'https://player.vimeo.com/video/'+ID;
		var embedShare = 'https://vimeo.com/'+ID;
	}
	else if (url.indexOf('facebook') >= 0){
		var ID = '';
		var embedUrl = 'https://www.facebook.com/plugins/video.php?href='+url+'&show_text=0';
		var embedShare = url;
	}
	
	var content = '<iframe class="videoLaunchIframe" src="'+embedUrl+'" frameborder="0" allowfullscreen></iframe>';
	
	if(share){
		content = content+'<div class="videoLaunchURL"><b>Compartir Enlace <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></b><input class="clickSelect" type="text" value="'+embedShare+'" readonly title2="You can copy & paste this URL to share" title2_pos="bottom"></div>';
	}
	
	bootbox.alert({
		title: title,
        message: content,
        size: 'large',
		backdrop: true
    }).on("shown.bs.modal", function(){
		//Disable button auto-focus
		$(".modal .modal-footer .btn:focus").blur();
		//Modify facebook src
		if (url.indexOf('facebook') >= 0){
			var videoLaunchIframeSRC = $(".videoLaunchIframe").attr("src");
			var videoLaunchIframeSRCwidth = $(".videoLaunchIframe").width();
			var videoLaunchIframeSRCheight = $(".videoLaunchIframe").height();
			$(".videoLaunchIframe").attr("src",videoLaunchIframeSRC+"&width="+videoLaunchIframeSRCwidth+"&height="+videoLaunchIframeSRCheight);
		}
	 });
	
	
}
function emailValido(email){
    
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
    if (email == ''){
        return false;
    }
    
    if (emailReg.test(email)){
        return true;
        
    }else{
        return false;
    }
}
function checkEmpty(campo){
	if ( campo == "" ||
		 campo == "--" ||
		 campo == null ||
		 campo == "undefinied" ){
			 //console.log('false');
			 return false;
		 }
		 else if(/^\s*$/.test(campo)){
			 //console.log('false');
			 return false;
		 }
		 else{
			 //console.log('true');
			 return true;
		 }
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function convertToSlug(Text){
	return Text
	    .toLowerCase()
	    .replace(/[^\w ]+/g,'')
	    .replace(/ +/g,'-')
	    ;
}
function Buscar(Contenedor){
	
	var Enlace = $(Contenedor).attr("url");
	var Boton = $(Contenedor).find("input");
	var Texto = $(Contenedor).find("input").val().replace(/(<([^>]+)>)/ig,"");
	
	
	if ( Boton.val() == "" ||
		 Boton.val() == null ||
		 Boton.val() == "undefinied" )
	{ 
		showAlert("Busqueda","Por favor ingrese su busqueda");
	}
	else
	{
		//showAlert("Busqueda","Los contenidos no están completamente definidos.");
		//alert("Busqueda: "+Texto);
		window.location=Enlace+'/articles?search='+Texto;
	}
		
}
function autoScroll(selector,animated,distance){      
    var scrollDistance = distance;
    var scrollTarget = $(selector);

    if(animated=="yes"){
        $('html, body').animate({scrollTop: (scrollTarget.offset().top - scrollDistance)}, 500);
    }
    else{
        $('html, body').scrollTop(scrollTarget.offset().top - scrollDistance);
    }
}
function disableClick(tipo){
	if(tipo==1){
		$("body").attr("oncontextmenu","return false");
	}
	else{
		$("body").removeAttr("oncontextmenu");
	}
}
function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
}
function getSrcParameter(sParam) {
	var scripts = document.getElementsByTagName('script');
	var index = scripts.length - 1;
	var myScript = scripts[index];
	// myScript now contains our script object
	var queryString = myScript.src.replace(/^[^\?]+\??/,'');

	var sPageURL = queryString,
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
}
function linkify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank" style="color:#385086; text-decoration: underline">$1</a>');

    //URLs starting with "www." (without // before it, or itd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank" style="color:#385086; text-decoration: underline">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
	//replacePattern3 = /(^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-\.]+?\.[a-zA-Z]{2,6}$)/gim;
	//replacePattern3 = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1" style="color:#385086; text-decoration: underline">$1</a>');

    return replacedText;
}
function stripTags(container, items){
	container.find("*").not(items).each(function() {
		$(this).remove();
	});
}
function checkDisabledLink(string){
	
	var textoUrl = string;

	//Sin Enlace
	if(textoUrl=="#no-link"){
		return false;
	}
	else if(textoUrl=="#"){
		return false;
	}
	else if(textoUrl=="#carousel-example-generic"){
		return true;
	}
	else if (textoUrl.indexOf('some-string') >= 0){
		//Stuff to do
		return false;
	}
	else{
		if(textoUrl.indexOf(window.location.host) <= 0){
			
			var seccion = capitalizeFirstLetter(textoUrl.split('#')[1]/*.replace("#", "")*/);
			//***
			if(textoUrl.substr(textoUrl.length - 1, 1) == 's') { //Spanish case for 2 or more
				showAlert(seccion+" disabled","This content is disabled or not available.");
			}
			else{
				showAlert(seccion+" disabled","This content is disabled or not available.");
			}
			
			return false;
		}
		else{
			return true;
		}
	}
}
function windowPopup(url, width, height, alignX, alignY, scroll) {
	
    var leftPosition;
	var topPosition;
	
	//Scrolling
	if(scroll){
		var getScroll = 'yes';
	}
	else{
		var getScroll = 'no';
	}
	
	//Horizontal Align
	if(alignX=="right"){
		leftPosition = window.screen.width;
	}
	else if(alignX=="left"){
		leftPosition = 0;
	}
	else{
		leftPosition = (window.screen.width / 2) - ((width / 2) + 10);//Allow for borders.
	}

	//Vertical Align
	if(alignY=="top"){
		topPosition = 0;
	}
	else if(alignY=="bottom"){
		topPosition = window.screen.height;
	}
	else{
		topPosition = (window.screen.height / 2) - ((height / 2) + 50);//Allow for title and status bars.
	}
	
    //Open the window.
    window.open(url, 
				"WindowPopupJS", "status=no,height="+height+",width="+width+",resizable=yes,left="+leftPosition+",top="+topPosition+",screenX="+leftPosition+",screenY="+topPosition+",toolbar=no,menubar=no,scrollbars="+getScroll+",location=no,directories=no");
}

/* ================================================= FUNCTIONS ================================================= */

$(document).ready(function(){

/* ================================================= DOCUMENT READY ================================================= */

	//Load Responsive Code
	responsiveCode();

	//Load LightGallery
	loadLightGallery();

	//Is Home
	if ($(".isHome").length > 0){
		isHome = true;
	}
	else{
		isHome = false;
	}

	//Is Mobile
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|BB10|PlayBook|MeeGo/i.test(navigator.userAgent) ) //v2
	{
		isMovil = true;
	}
	else{
		isMovil = false;
	}

	//OLD Internet Explorer Fixes
	if($.browser.msie && parseInt($.browser.version, 10) === 6 || 
	   $.browser.msie && parseInt($.browser.version, 10) === 7 || 
	   $.browser.msie && parseInt($.browser.version, 10) === 8 /*||  
	   $.browser.msie && parseInt($.browser.version, 10) === 9*/){
		isOldIE = true;
	}
	else{
		isOldIE = false;
	}

	//Detectar navegadores
	isChrome = navigator.userAgent.indexOf('Chrome') > -1;
	isExplorer = navigator.userAgent.indexOf('MSIE') > -1;
	isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
	isSafari = navigator.userAgent.indexOf("Safari") > -1;
	isOpera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
	if ((isChrome)&&(isSafari)) {isSafari=false;}
	if ((isChrome)&&(isOpera)) {isChrome=false;}
	
	
	var browserTest = ''
					+'jQuery.browser.ua  = '+jQuery.browser.ua+'\n'
					+'jQuery.browser.name  = '+jQuery.browser.name+'\n'
					+'jQuery.browser.fullVersion  = '+jQuery.browser.fullVersion+'\n'
					+'jQuery.browser.version = '+jQuery.browser.version+'\n'
					+'jQuery.browser.msie = '+jQuery.browser.msie+'\n'
					+'jQuery.browser.mozilla = '+jQuery.browser.mozilla+'\n'
					+'jQuery.browser.opera = '+jQuery.browser.opera+'\n'
					+'jQuery.browser.webkit = '+jQuery.browser.webkit+'\n';
	console.log(browserTest);

	//Touch swipe bootstrap carousel
	/*$("#carousel-example-generic").swiperight(function() {  
		$(this).carousel('prev');  
	});  
	$("#carousel-example-generic").swipeleft(function() {  
		$(this).carousel('next');  
	});*/
	
	//Tooltip load
	$('*[data-toggle="tooltip"]').tooltip();
	
	//Popover load
	$('*[data-toggle="popover"]').popover();

	//Carousel timer
	$('*[data-interval]').carousel({
		interval: $(this).data('interval');
	});
	
	//Apply Auto Background
	$("*[data-autobg]").each(function(){
		autoBackground($(this));
	});
	
	//Applu Data Tables
	$('.dataTable').each(function(){
		$(this).DataTable({
			paging: toBoolean($(this).data('paginator')),
			searching: toBoolean($(this).data('filter')),
			info: toBoolean($(this).data('info')),
			ordering: toBoolean($(this).data('ordering')),
		});
	});
	
	
	//Text select on click
	$(document).on("click", ".clickSelect", function(e) {
		$(this).select();
	});
	
	//Modal on disabled links
	$(document).on("click", "a[href*=#]", function(e) {
		var source =  $(this).attr("href");

		if(!(checkDisabledLink(source))){
			e.preventDefault();
		}
	});
	
	
		
	

/* ================================================= DOCUMENT READY ================================================= */

});

$(window).bind("load", function() {

/* ================================================= WINDOWS LOAD ================================================= */
	
	
		
/* ================================================= WINDOWS LOAD ================================================= */

});