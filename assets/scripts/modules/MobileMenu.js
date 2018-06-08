import $ from "jquery";

class cjsMobileMenu{
	constructor(){
		//alert("Testing cjsMobileMenu");
		this.siteHeader =$(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
	}
	//
	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		//console.log(this);
	}
	//
	toggleTheMenu(){
		//alert(this)
		//console.log(this);
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expended");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
		
	}
	
	
}


export default cjsMobileMenu;