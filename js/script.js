//js
wow = new WOW(
    {
    	boxClass:     'wow',      // default
    	animateClass: 'animated', // default
    	offset:       0,          // default
    	mobile:       true,       // default
    	live:         true        // default
  	}
  )
  wow.init();
// jq

  $(document).ready(function(){
  	$('.js-preloader').preloadinator({
  		animationDuration: 7000
		});
  });
  