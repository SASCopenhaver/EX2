import $ from "jquery";

class cjsModal{
	constructor(){
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		
		this.events();
	}

	events(){
		//click Open button
		this.openModalButton.click( 
			
			this.openModal.bind(this) );
		
		
		
		//clicking to close button
		this.closeModalButton.click( this.closeModal.bind(this) );
		
		//any key
		$(document).keyup(this.keyPressHandler.bind(this));
		
	}
	
	keyPressHandler(e){
		if (e.keyCode == 27){
			this.closeModal();
		}
	}
	
	
	openModal(){ 
		this.modal.addClass("modal--is-visible");
		return false;
	}
	
	closeModal(){
		this.modal.removeClass("modal--is-visible");
	}
}

export default cjsModal;