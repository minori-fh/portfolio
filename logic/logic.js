$(document).ready(function(){
    // general
    $("#about-stack-content").css("display", "none")
    $("#mailto-link-black").css("display", "none")
    $("#see-about").addClass(".about-btn-selected")
    $("#altgen-projtxt-wrapper").css("display", "none")
    $("#adopt-projtxt-wrapper p, #adopt-projtxt-wrapper div").css("display", "none")

    // page displays
    $("#aboutpage, #workpage, #contactpage").css("display","none");

    $(".arrowto-work").on("click", function(){
        $('#workpage').css("display", "inherit")
        $('#contactpage').css("display", "inherit")
        $('html, body').animate({scrollTop: $("#workpage").offset().top}, 700)
        $('#work-btn').removeClass("grey"); $('#work-btn').addClass("offW")

        $('#about-btn').removeClass("offW"); $('#about-btn').addClass("grey")
        $("#mailto-link-white").addClass("text-blur-out")
        $("#mailto-link-white").css("display", "none")
        $("#mailto-link-black").css("display", "inherit")

        $("#see-about").trigger("click")
        $("#see-about").removeClass("about-menu-btn"); $("#see-about").addClass("about-menu-btn-selected")
    })

    $(".arrowto-about").on("click", function(){
        $('html, body').animate({scrollTop: $("#homepage").offset().top}, 700)
        $('#about-btn').removeClass("grey"); $('#about-btn').addClass("offW")

        $('#work-btn').removeClass("offW"); $('#work-btn').addClass("grey")
    })

    $(".arrowto-contact").on("click", function(){
        $('#contactpage').css("display", "inherit")
        $('html, body').animate({scrollTop: $("#contactpage").offset().top}, 700)
        $('#contact-btn').removeClass("grey"); $('#contact-btn').addClass("offW")

        $('#work-btn').removeClass("offW"); $('#work-btn').addClass("grey")
        $('#about-btn').removeClass("offW"); $('#about-btn').addClass("grey")
    })


    // show about/stack display
    $("#see-stack").on("click", function(){
        $("#see-about").removeClass("about-menu-btn-selected"); $("#see-about").addClass("about-menu-btn")
        $('#about-content').addClass("slide-out-left"); $('#about-content').css("display","none") 
        $('#about-stack-content').css("display","inherit"); $('#about-stack-content').addClass("slide-in-right")   
    })

    $("#see-about").on("click", function(){
        $("#see-about").removeClass("about-menu-btn-selected"); $("#see-about").addClass("about-menu-btn")
        $('#about-stack-content').addClass("slide-out-left"); $('#about-stack-content').css("display","none")
        $('#about-content').css("display","inherit"); $('#about-content').addClass("slide-in-right")   
    })

    // animations
    $("#getintouch, #getintouchmenu").mouseover(function(){
        $(this).addClass("jello-horizontal")
    })

    $("#getintouch, #getintouchmenu").mouseleave(function(){
        $(this).removeClass("jello-horizontal")
    })

    // scroll positioning + animation

    let prevscroll = 0;

    window.onscroll = function(event) {

        let homepageheight = $("#homepage").height();
        let halfhomepageheight = homepageheight * 1.36; console.log("HALF HOMEPAGE HEIGHT " + halfhomepageheight)
        var scrollPoint = window.scrollY + window.innerHeight; console.log("SCROLLPOINT " + scrollPoint)

        // scrolling down
        if (scrollPoint > prevscroll){
            // animation
            // HIT PROJECT PAGE
            if(scrollPoint >= homepageheight){
                let pxtoProjectOne = homepageheight + ($(".menubar-container").height() * 2) + $(".nav-arrow-wrapper").height() + ($("#workheader-wrapper").height() + 35) + 120; console.log("project one height: " + pxtoProjectOne) 
                let pxtoProjectTwo = pxtoProjectOne + 100 + $(".project-desc-wrapper").height(); console.log("project two height: " + pxtoProjectTwo)
                prevscroll = scrollPoint
                // HIT PROJECT ONE PAGE

            if (scrollPoint >= halfhomepageheight){
                $('#about-btn').removeClass("offW"); $('#about-btn').addClass("grey")
                $('#work-btn').removeClass("grey"); $('#work-btn').addClass("offW") 

                if (scrollPoint >= pxtoProjectOne){
                    console.log("we are at project one")
                    $("#altgen-projtxt-wrapper").css("display", "flex")
                    $("#altgen-projtxt-wrapper").addClass("slide-in-bottom")
                    prevscroll = scrollPoint
                // HIT PROJECT TWO PAGE
                    if (scrollPoint >= pxtoProjectTwo){
                        console.log("we are at project two")
                        $("#adopt-projtxt-wrapper p, #adopt-projtxt-wrapper div").css("display", "inline")
                        $("#adopt-projtxt-wrapper").addClass("slide-in-bottom")
                        prevscroll = scrollPoint
                    }
                }
            }
            } 
        // scrolling up
        } else if (scrollPoint < prevscroll) {
            if (scrollPoint <= halfhomepageheight){
                console.log("BACK TO ABOUT PAGE")
                $('#about-btn').removeClass("grey"); $('#about-btn').addClass("offW")
                $('#work-btn').removeClass("offW"); $('#work-btn').addClass("grey")
            }
            prevscroll = scrollPoint
        }

        // menubar


        // if (scrollPoint <= halfhomepageheight){
        //     // $('#about-btn').removeClass("grey"); $('#about-btn').addClass("offW")
        //     // $('#work-btn').removeClass("offW"); $('#work-btn').addClass("grey")
        //     window.addEventListener('wheel', function(event){

        //     if (event.deltaY < 0){
        //     console.log('scrolling up');
        //     } else if (event.deltaY > 0){
        //     console.log('scrolling down');}

        //     });
        // }

    };


    // contact bar change color logic
    $('#front').height($('#back').height())

    let scrollpx; let percent_complete;

    let mailheight = parseInt($(".email-wrapper").height())
    let spaceheight = (300 - (mailheight + 60))/3
    let mb = 100 + 15 + 20 + spaceheight

    console.log("MB " + mb)

    // window.onscroll = function(event) {
    //     console.log(scrollpx)
    //     altInViewport()
    //     adoptInViewport()
    // };

    percent_complete = 45
    bb_width = (percent_complete * $('#back').height())/100
    console.log("THIS IS BB_WIDTH: " + bb_width)
    $('#boundbox').css('height', bb_width.toString())


    // typewriter function to print out name in home page
    let i = 0;
    let txt = "my name is Minori"
    let speed = 90;

    let typewriter = () => {
        if (i < txt.length){
            document.getElementById("intro-name").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typewriter, speed)
        }
    }

    typewriter()
    
    // parallax scenes
    var sceneHello = document.getElementById('scene-hello');
    var parallaxInstance = new Parallax(sceneHello);

    // var sceneWork = document.getElementById('sceneWork');
    // var parallaxInstance = new Parallax(sceneWork);

    // var sceneAbout = document.getElementById('sceneAbout');
    // var parallaxInstance = new Parallax(sceneAbout);

    // var sceneExp = document.getElementById('sceneExp');
    // var parallaxInstance = new Parallax(sceneExp);

    // var sceneWorkA = document.getElementById('sceneWorkA');
    // var parallaxInstance = new Parallax(sceneWorkA);

    // var profPicOverlay = document.getElementById('prof-pic-wrapper');
    // var parallaxInstance = new Parallax(profPicOverlay);
}     
)

