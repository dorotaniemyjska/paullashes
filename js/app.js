var elem = document.querySelector('.quotes-wrapper');
var flkty = new Flickity(elem, {
    cellAlign: 'center',
    contain: true
});

(function () {
    'use strict';

    var navSelector = '.navigation';
    var linksSelector = '.navigation a';
    var scrollSpeed = 50;

    var timer, targetPosition;

    function scroll() {
        var delta = targetPosition - document.documentElement.scrollTop;
        if (delta > 0) {
            document.documentElement.scrollTop += Math.min(delta, scrollSpeed);
        } else if (delta < 0) {
            document.documentElement.scrollTop += Math.max(delta, -scrollSpeed);
        } else {
            clearInterval(timer);
        }

        if (window.innerHeight >= document.documentElement.scrollHeight - document.documentElement.scrollTop) {
            clearInterval(timer);
        }
    };

    var onLinkClick = function (event) {
        event.preventDefault();
        clearInterval(timer)

        var navHeight = document.querySelector(navSelector).offsetHeight;
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            targetPosition = Math.max(0, target.offsetTop - navHeight);
            scroll();
            timer = setInterval(scroll, 1000 / 30);
        }
    };

    var links = document.querySelectorAll(linksSelector);

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', onLinkClick);
    }

})();

//scrollowanie

window.sr = ScrollReveal();
sr.reveal('img', {
    reset: false,
    delay: 300,
    distance: 0,

});
sr.reveal('h2, p', {
    reset: false,
    delay: 300
});

// go-up button

const goUpBtn = document.querySelector(".go-up i");

goUpBtn.addEventListener("click", function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth" /*delikatnie wraca na górę*/
    });
});

//cookies alert

function simplecookienotification_v01_create_cookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
    document.getElementById("simplecookienotification_v01").style.display = "none";
}

function simplecookienotification_v01_read_cookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
var simplecookienotification_v01_jest = simplecookienotification_v01_read_cookie("simplecookienotification_v01");
if (simplecookienotification_v01_jest == 1) {
    document.getElementById("simplecookienotification_v01").style.display = "none";
}

var galTable = new Array();
var galx = 0;


//navigacja
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//scroll indicator


//
//window.onscroll = function() {myFunction()};
//
//function myFunction() {
//  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//  var scrolled = (winScroll / height) * 100;
//  document.getElementById("myBar").style.width = scrolled + "%";
//}



// read more-less




$('.read-more-content').addClass('hide')
$('.read-more-show, .read-more-hide').removeClass('hide')

$('.read-more-show').on('click', function(e) {
  $(this).next('.read-more-content').removeClass('hide');
  $(this).addClass('hide');
  e.preventDefault();
});

$('.read-more-hide').on('click', function(e) {
  var p = $(this).parent('.read-more-content');
  p.addClass('hide');
  p.prev('.read-more-show').removeClass('hide');
  e.preventDefault();
});
