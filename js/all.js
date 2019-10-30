$(document).ready(function($) {

	//下拉式選單
	$('.dropdown1').click(function(event) {
	event.preventDefault();
	$(this).parent().find('ul').slideToggle(600);
	$(this).parent().siblings().find('ul').slideUp(600);
	
	});

	//輪播效果
	var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed:2000,
    	autoplay: {
    	delay: 2000,
  		},
  		effect:'slide',

    	// If we need pagination
    	pagination: {
      	el: '.swiper-pagination',
    	},

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    })

     //燈箱效果

	 lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
   		 })

	 //top效果

	 $('.topbutton a').click(function(event) {
  		event.preventDefault();
  		$("html,body").animate({
    	scrollTop: 0},2000);
 		});

	});	 
	
	
	

	
	