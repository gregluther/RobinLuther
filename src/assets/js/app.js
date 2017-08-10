import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();




//testing
$(function() {
  $(window).scroll(function() {
  	//alert("function called");
    var winTop = $(window).scrollTop();  // for chrome
    if (winTop >= 30 || document.documentElement.scrollTop >= 30) {
      //alert("class added");	
      //$("body").addClass("sticky-shrinknav-wrapper");
      document.getElementById('animated-menu').classList.remove('nav__nav-bar--primary-loaded');
      document.getElementById('animated-menu').classList.add('nav__nav-bar--primary-moved');
    } else {
      //alert("class removed");	
      // $("body").removeClass("sticky-shrinknav-wrapper");
      document.getElementById('animated-menu').classList.add('nav__nav-bar--primary-loaded');
      document.getElementById('animated-menu').classList.remove('nav__nav-bar--primary-moved');

    }
  });
});

//                     document.getElementById('animated-menu').classList.add('nav__nav-bar--primary');

// $(function() {
//   $(window).scroll(function() {
//     var winTop = $(window).scrollTop();
//     if (winTop >= 30) {
//       $("body").addClass("sticky-shrinknav-wrapper");
//     } else{
//       $("body").removeClass("sticky-shrinknav-wrapper");
//     }
//   });
// });







