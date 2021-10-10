var $ = jQuery.noConflict();

jQuery(document).ready(function ($) {
var colors = ['color-1', 'color-2']
var addNewColor = colors[Math.floor(Math.random()*colors.length)];
// console.log(addNewColor);
$(function() {
$('body').addClass(addNewColor);
});

 $('.el-tilt').tilt({
    maxTilt:15,
    speed:100,
    transition:true,
    perspective:1000,
    glare:true
 });

    // ================================
    // add class whwn toggler icon clicked!
    // =================================
    $('.navbar-toggler').click(function () {
        $('body').toggleClass('menu-open');
    });

    // team member details visible!
    $('.member-box').click(function () {
        $('.member-detail-outer').toggleClass('open-details');
        $('#teamMembers').toggleClass('toggle');
         $('html, body').animate({
            scrollTop: $('.open-details').offset().top - 80
          }, 200)
    });
    $('.close-icon').click(function () {
        $('#teamMembers').toggleClass('toggle');
        $('.member-detail-outer').toggleClass('open-details');
    });






gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.matchMedia({
  
  // desktop
  "(min-width: 768px)": function() {
   const animateProcess = gsap.utils.toArray(".animate-child");
    animateProcess.forEach((title) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            once:true,
            start: 'top 90%', 
            toggleClass:'animated',
          }
        })
    });
  }, 
  
  // mobile
  "(max-width: 767px)": function() {
   const animateProcess = gsap.utils.toArray(".animate-child");
    animateProcess.forEach((title) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            once:true,
            start: 'top 100%', 
            toggleClass:'animated',
          }
        })
    });
  }
  
});


 ScrollTrigger.matchMedia({
  
  // desktop
  "(min-width: 768px)": function() {
     gsap.utils.toArray(".js-arrowMove").forEach(heading => {
      var tl = gsap.timeline({
          scrollTrigger: {
              trigger: heading,
              toggleActions: "restart none none none",
              start: "top 90%",
              end: "top 50%",
              scrub: true,
              ease: "power3.out",
          }
      });  tl.from(heading, {
           x: "-105%",
           ease: "power1",
      });
  });
  }, 
  
  // mobile
  "(max-width: 767px)": function() {
     gsap.utils.toArray(".js-arrowMove").forEach(heading => {
      var tl = gsap.timeline({
          scrollTrigger: {
              trigger: heading,
              toggleActions: "restart none none none",
              start: "top 100%",
              end: "top 50%",
              scrub: true,
              ease: "power3.out",
          }
      });  tl.from(heading, {
           x: "-105%",
           ease: "power1",
      });
  });
  }
  
});


 ScrollTrigger.matchMedia({

  "(min-width: 768px)": function() {
    gsap.utils.toArray(".card-box_2").forEach(cb => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: cb,
            toggleActions: "restart none none none",
            start: "top bottom",
            end: "top top",
            scrub: true
        }
    });  tl.to(cb, {
         y: -70,
    });
});
  }, 
  

  "(max-width: 767px)": function() {
    gsap.utils.toArray(".card-box_2").forEach(cb => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: cb,
            toggleActions: "restart none none none",
            start: "top bottom",
            end: "top top",
            scrub: true
        }
    });  tl.to(cb, {
         y: -10,
    });
});
  }
  
});


 

  


  gsap.utils.toArray(".slide-up-text").forEach(cb => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: cb,
            toggleActions: "restart none none none",
            start: "top 40%",
            end: "top 5%",
            scrub: true
        }
    });  tl.to(cb, {
         y: -100,
    });
});


gsap.set(".rollingText", {xPercent: 100})
gsap.set(".rollingText02", {xPercent: -100})

gsap.to(".rollingText", {
  xPercent: -15,
  scrollTrigger: {
    scrub: true,
    start: "top bottom",
    end: "bottom top"
    // markers: true
  }
});

gsap.to(".rollingText02", {
  xPercent: -15,
  scrollTrigger: {
    trigger: ".rollingText",
    scrub: true,
    start: "top bottom",
    end: "bottom top"
    // markers: true
  }
});
/*==========================*/  
/* Scroll on animate */  
/*==========================*/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });
        var osTrigger = ( trigger ) ? trigger : osElement;
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '95%',
        });

  });
}
onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));


    /*==========================*/
    /* Header fix */
    /*==========================*/
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});


