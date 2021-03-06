/* ================================================= BASE LANGUAGE ================================================= */

//Define language by default
var mainLang = $('body').data('js-lang');
var language = {
				//Form validation
				'@validate-title': {
					en: 'Form Alert',
					es: 'Alerta Formulario',
				},
				'@validate-normal': {
					en: 'Please fill the fields.',
					es: 'Por favor complete los campos.',
				},
				'@validate-number': {
					en: 'Please type a valid number.',
					es: 'Por favor escriba un número válido.',
				},
				'@validate-tel': {
					en: 'Please type a phone number.',
					es: 'Por favor escriba un teléfono válido.',
				},
				'@validate-pass': {
					en: 'Please fill your password.',
					es: 'Por favor complete su clave.',
				},
				'@validate-email': {
					en: 'Please type a correct E-Mail.',
					es: 'Por favor escriba un E-Mail válido.',
				},
				'@validate-search': {
					en: 'Please fill the search field.',
					es: 'Por favor complete el campo de busqueda.',
				},
				'@validate-checkbox': {
					en: 'Please check an option.',
					es: 'Por favor elija opciones.',
				},
				'@validate-radio': {
					en: 'Please check one of the options.',
					es: 'Por favor elija una de las opciones.',
				},
				'@validate-textarea': {
					en: 'Please write a message.',
					es: 'Por favor escriba un mensaje.',
				},
				'@validate-select': {
					en: 'Please select an option.',
					es: 'Por favor seleccione una opción.',
				},
				'@validate-file': {
					en: 'Please select a file.',
					es: 'Por favor seleccione un archivo.',
				},
				'@validate-confirm-title': {
					en: 'Form Confirm',
					es: 'Confirmar Formulario',
				},
				'@validate-confirm-text': {
					en: 'Are you sure you want to send the previous info?',
					es: '¿Estas seguro de que deseas enviar el formulario?',
				},
				//Video launch
				'@videolaunch-title': {
					en: 'Share Link',
					es: 'Compartir Enlace',
				},
				'@videolaunch-text': {
					en: 'Share link has been copied!',
					es: '¡El enlace ha sido copiado!',
				},
				//Map launch
				'@maplaunch-title': {
					en: 'Map Select',
					es: 'Mapa Dirección',
				},
				'@maplaunch-text': {
					en: 'Select one of options below',
					es: 'Seleccione una de las opciones',
				},
				'@maplaunch-alert': {
					en: 'We remind you that you must have this app installed on your device. Do you want to continue?',
					es: 'Le recordamos que debe tener esta aplicación instalada en su dispositivo. ¿Desea continuar?',
				},
				//Lightgallery
				'@lgtitle-prev-text': {
					en: 'Loading previous page ...',
					es: 'Cargando página anterior ...',
				},
				'@lgtitle-next-text': {
					en: 'Loading next page ...',
					es: 'Cargando siguiente página ...',
				},
				'@lgtitle-prev-button': {
					en: 'Previous Page',
					es: 'Pág. Anterior',
				},
				'@lgtitle-next-button': {
					en: 'Next Page',
					es: 'Pág. Siguiente',
				},
				'@lgtitle-gallery-close': {
					en: 'Closing ...',
					es: 'Cerrando ...',
				},
				//Check disabled
				'@disabled-text': {
					en: 'This content is currently disabled.',
					es: 'Este contenido esta deshabilitado por el momento.',
				},
				//Window popup error
				'@winpopup-title': {
					en: 'Pop-up Blocked!',
					es: 'Pop-up Bloqueado!',
				},
				'@winpopup-text': {
					en: 'Please add this site to your exception list and try again.',
					es: 'Por favor agrega este sitio a la lista de excepciones e inténtalo denuevo.',
				},
			};

//Set default language
if(mainLang === undefined || mainLang === null || mainLang == ''){ //Empty value
	mainLang = 'en';
}

//Parse language strings
function lang(string)
{
	var text = language[string][mainLang];
	
	if(text === undefined || text === null || text == ''){
		text = language[string]['en'];
	}
	
	return text;
}

/* ================================================= BASE LANGUAGE ================================================= */
