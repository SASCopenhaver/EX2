import $ from "jquery";
import waypoints from "../../../node_modules/waypoints/lib/noframework.waypoints.js";

class cjsRevealOnScroll{
	constructor( argElem, argOffset ){
		this.itemsToReveal    = argElem; //$(".tech-item, .testimonial");
		this.offsetPercentage = argOffset;
		this.hideInitially();
		this.createWaypoints();
	}
	
	hideInitially(){
		this.itemsToReveal.addClass("reveal-item");
	}
	
	createWaypoints(){
		var that = this;
		this.itemsToReveal.each(function(){
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function(){
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: that.offsetPercentage//"85%"
			});
		});
	}
}
//
export default cjsRevealOnScroll;