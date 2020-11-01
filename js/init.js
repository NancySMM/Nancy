(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function openMenuMobile(navLinks) {
	navLinks.classList.remove('hide-on-med-and-down');
	navLinks.classList.add('menu-mobile');
}

function closeMenuMobile(navLinks) {
	console.log('click')
	navLinks.classList.add('hide-on-med-and-down');
	navLinks.classList.remove('menu-mobile');
}

function onBurgerClick() {
	// per aprire
	// togliere .hide-on-med-and-down e mettere .menu-mobile a #nav-links
	// per chiudere
	// viceversa
	const navLinks = document.getElementById('nav-links');
	
	if (navLinks.classList.contains('menu-mobile')) {
		closeMenuMobile(navLinks);
	} else {
		openMenuMobile(navLinks);
	}

}

function main() {
	// quando #nav-burger-menu viene premuto
	const burger = document.getElementById('nav-burger-menu');
	burger.addEventListener('click', onBurgerClick);

	const navLinks = document.getElementById('nav-links');
	const lis = navLinks.getElementsByTagName('li');
	// console.log(lis)
	for (i = 0; i < lis.length; i++) {
		// quando clicca li si chiude .menu-mobile
		const li = lis[i];
		li.addEventListener('click', closeMenuMobile.bind(null, navLinks));
	}
}

document.addEventListener('DOMContentLoaded', main);
window.addEventListener('resize', () => {
	if (window.innerWidth > 992) {
		closeMenuMobile(document.getElementById('nav-links'));
	}
})