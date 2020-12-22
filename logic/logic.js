$(document).ready(function(){
    // general
    $("#about-stack-content").css("display", "none")

    // page displays
    $("#aboutpage, #workpage").css("display","none");

    $(".arrowto-work").on("click", function(){
        $('#workpage').css("display", "inherit")
        $('html, body').animate({scrollTop: $("#workpage").offset().top}, 700)
        $('#work-btn').removeClass("grey"); $('#work-btn').addClass("offW")

        $('#about-btn').removeClass("offW"); $('#about-btn').addClass("grey")


    })

    $(".arrowto-about").on("click", function(){
        $('html, body').animate({scrollTop: $("#homepage").offset().top}, 700)
        $('#about-btn').removeClass("grey"); $('#about-btn').addClass("offW")

        $('#work-btn').removeClass("offW"); $('#work-btn').addClass("grey")

    })

    // show about/stack display
    $("#see-stack").on("click", function(){
        $('#about-content').addClass("slide-out-left"); $('#about-content').css("display","none") 
        $('#about-stack-content').css("display","inherit"); $('#about-stack-content').addClass("slide-in-right")   
        $('#see-stack').addClass("about-btn-selected"); $('#see-about').removeClass("about-btn-selected")   
    })

    $("#see-about").on("click", function(){
        $('#about-stack-content').addClass("slide-out-left"); $('#about-stack-content').css("display","none")
        $('#about-content').css("display","inherit"); $('#about-content').addClass("slide-in-right")   
        $('#see-about').addClass("about-btn-selected"); $('#see-stack').removeClass("about-btn-selected")   
    })

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

