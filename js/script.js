/**
 * Sitework Dashboard JS
 */

 console.log('[Jarno\'s Dashboard Initialised]');

 /**
  * Dashboard.js
  */
 
 document.addEventListener('DOMContentLoaded', function () {
 
     /**
      * Clock Widget
      *
      * Source: https://www.codesdope.com/blog/article/how-to-create-a-digital-clock-using-javascript/
      */
 
    //  function currentTime() {
 
    //      var date = new Date(); /* creating object of Date class */
    //      var hour = date.getHours();
    //      var min = date.getMinutes();
    //      var sec = date.getSeconds();
 
    //      hour = updateTime(hour);
    //      min = updateTime(min);
    //      sec = updateTime(sec);
 
    //      document.getElementById("clock__hours").innerText = hour; /* + " : " + sec; */ /* adding time to the div */
    //      document.getElementById("clock__minutes").innerText = min; /* + " : " + sec; */ /* adding time to the div */
    //      document.getElementById("clock__seconds").innerText = sec; /* adding time to the div */
    //      var t = setTimeout(function () { currentTime() }, 1000); /* setting timer */
 
    //  }
 
    //  function updateTime(k) {
         
    //      if (k < 10) {
         
    //          return "0" + k;
         
    //      }   else {
             
    //          return k;
         
    //      }
    //  }
 
    //  currentTime(); /* calling currentTime() function to initiate the process */
 
    //  console.log("['System Clock is Counting']");
 
 });
 
 // time
 function clock() {// We create a new Date object and assign it to a variable called "time".
    var time = new Date(),
        
        // Access the "getHours" method on the Date object with the dot accessor.
        hours = time.getHours(),
        
        // Access the "getMinutes" method with the dot accessor.
        minutes = time.getMinutes(),
        
        
        seconds = time.getSeconds();
    
    document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
      
      function harold(standIn) {
        if (standIn < 10) {
          standIn = '0' + standIn
        }
        return standIn;
      }
    }
    setInterval(clock, 1000);

// date
"use strict";

const getS = (selector) => document.querySelector(selector);

function returnData(zero) {
  return zero >= 10 ? zero : `0${zero}`;
}

/*current data*/
setInterval(() => {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  getS(".digital-date").innerHTML = `${returnData(date)}.${returnData(
    month
  )}.${year}`;
});


// page wissel
var TIME_PER_PAGE = 3000;
	window.onload = function() {
		var pages = document.querySelectorAll('.page'),
			numPages = pages ? pages.length : 0;
			i = -1;

		function nextPage() {
			if (i >= 0)
				pages[i].classList.remove('currentPage');

			i++;
			pages[i].classList.add('currentPage');
			if (i < numPages - 1)
				setTimeout(nextPage, TIME_PER_PAGE);
		}

		nextPage();
	}




// loading page js
function Ticker( elem ) {
	elem.lettering();
	this.done = false;
	this.cycleCount = 5;
	this.cycleCurrent = 0;
	this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+{}|[]\\;\':"<>?,./`~'.split('');
	this.charsCount = this.chars.length;
	this.letters = elem.find( 'span' );
	this.letterCount = this.letters.length;
	this.letterCurrent = 0;

	this.letters.each( function() {
		var $this = $( this );
		$this.attr( 'data-orig', $this.text() );
		$this.text( '-' );
	});
}

Ticker.prototype.getChar = function() {
	return this.chars[ Math.floor( Math.random() * this.charsCount ) ];
};

Ticker.prototype.reset = function() {
	this.done = false;
	this.cycleCurrent = 0;
	this.letterCurrent = 0;
	this.letters.each( function() {
		var $this = $( this );
		$this.text( $this.attr( 'data-orig' ) );
		$this.removeClass( 'done' );
	});
	this.loop();
};

Ticker.prototype.loop = function() {
	var self = this;

	this.letters.each( function( index, elem ) {
		var $elem = $( elem );
		if( index >= self.letterCurrent ) {
			if( $elem.text() !== ' ' ) {
				$elem.text( self.getChar() );
				$elem.css( 'opacity', Math.random() );
			}
		}
	});

	if( this.cycleCurrent < this.cycleCount ) {
		this.cycleCurrent++;
	} else if( this.letterCurrent < this.letterCount ) {
		var currLetter = this.letters.eq( this.letterCurrent );
		this.cycleCurrent = 0;
		currLetter.text( currLetter.attr( 'data-orig' ) ).css( 'opacity', 1 ).addClass( 'done' );
		this.letterCurrent++;
	} else {
		this.done = true;
	}

	if( !this.done ) {
		requestAnimationFrame( function() {
			self.loop();
		});
	} else {
		setTimeout( function() {
			self.reset();
		}, 750 );
	}
};

$words = $( '.word' );

$words.each( function() {
	var $this = $( this ),
		ticker = new Ticker( $this ).reset();
	$this.data( 'ticker', ticker  );
});




// about me

$(document).ready(function () {
  // typing animation
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  // input text for typing animation
  $("#holder").writeText("WEB DESIGNER + FRONT-END DEVELOPER");

  // initialize wow.js
  new WOW().init();

  // Push the body and the nav over by 285px over
  var main = function () {
    $(".fa-bars").click(function () {
      $(".nav-screen").animate(
        {
          right: "0px"
        },
        200
      );

      $("body").animate(
        {
          right: "285px"
        },
        200
      );
    });

    // Then push them back */
    $(".fa-times").click(function () {
      $(".nav-screen").animate(
        {
          right: "-285px"
        },
        200
      );

      $("body").animate(
        {
          right: "0px"
        },
        200
      );
    });

    $(".nav-links a").click(function () {
      $(".nav-screen").animate(
        {
          right: "-285px"
        },
        500
      );

      $("body").animate(
        {
          right: "0px"
        },
        500
      );
    });
  };

  $(document).ready(main);

  // initiate full page scroll

  $("#fullpage").fullpage({
    scrollBar: true,
    responsiveWidth: 400,
    navigation: true,
    navigationTooltips: ["home", "about", "portfolio", "contact", "connect"],
    anchors: ["home", "about", "portfolio", "contact", "connect"],
    menu: "#myMenu",
    fitToSection: false,

    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);

      //using index
      if (index == 1) {
        /* add opacity to arrow */
        $(".fa-chevron-down").each(function () {
          $(this).css("opacity", "1");
        });
        $(".header-links a").each(function () {
          $(this).css("color", "white");
        });
        $(".header-links").css("background-color", "transparent");
      } else if (index != 1) {
        $(".header-links a").each(function () {
          $(this).css("color", "black");
        });
        $(".header-links").css("background-color", "white");
      }

      //using index
      if (index == 2) {
        /* animate skill bars */
        $(".skillbar").each(function () {
          $(this)
            .find(".skillbar-bar")
            .animate(
              {
                width: $(this).attr("data-percent")
              },
              2500
            );
        });
      }
    }
  });

  // move section down one
  $(document).on("click", "#moveDown", function () {
    $.fn.fullpage.moveSectionDown();
  });

  // fullpage.js link navigation
  $(document).on("click", "#skills", function () {
    $.fn.fullpage.moveTo(2);
  });

  $(document).on("click", "#projects", function () {
    $.fn.fullpage.moveTo(3);
  });

  $(document).on("click", "#contact", function () {
    $.fn.fullpage.moveTo(4);
  });

  // smooth scrolling
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top
            },
            700
          );
          return false;
        }
      }
    });
  });

  //ajax form
  $(function () {
    // Get the form.
    var form = $("#ajax-contact");

    // Get the messages div.
    var formMessages = $("#form-messages");

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: "POST",
        url: $(form).attr("action"),
        data: formData
      })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass("error");
          $(formMessages).addClass("success");

          // Set the message text.
          $(formMessages).text(response);

          // Clear the form.
          $("#name").val("");
          $("#email").val("");
          $("#message").val("");
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass("success");
          $(formMessages).addClass("error");

          // Set the message text.
          if (data.responseText !== "") {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text(
              "Oops! An error occured and your message could not be sent."
            );
          }
        });
    });
  });
});


// screen width
let schermwidth = screen.width;
console.log(schermwidth);