import $ from "jquery";

import cjsMobileMenu from "./modules/MobileMenu";
import cjsRevealOnScroll from "./modules/RevealOnScroll";
import cjsStickyHeader from "./modules/StickyHeader";
import cjsModal from "./modules/Modal";


var vcjsMobileMenu = new cjsMobileMenu();
//var vcjsRevealOnScroll = new cjsRevealOnScroll();
new cjsRevealOnScroll( $(".tech-item"), "85%" );
new cjsRevealOnScroll( $(".testimonial"), "50%" );

var vcjsStickyHeader = new cjsStickyHeader();
var vcjsModal = new cjsModal();
