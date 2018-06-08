import $ from "jquery";

import cjsMobileMenu from "./modules/MobileMenu";
import cjsRevealOnScroll from "./modules/RevealOnScroll";

var vcjsMobileMenu = new cjsMobileMenu();
//var vcjsRevealOnScroll = new cjsRevealOnScroll();
new cjsRevealOnScroll( $(".tech-item"), "85%" );
new cjsRevealOnScroll( $(".testimonial"), "50%" );
