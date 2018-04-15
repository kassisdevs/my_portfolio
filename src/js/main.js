/** Hide nav bar and change color when you scroll down**/
$(document).ready(function(){

'use strict';

$(window).scroll(function() {

  'use strict';
    if ($(window).scrollTop() > 700 ) {
        $('.navbar').css ({
        'background': '#2C3E50',
        'background-color': '#2C3E50',
    });
  } else {
    $('.navbar').css ({
    'background': 'transparent'
});

  }


});


});
