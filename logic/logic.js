$(document).ready(function(){

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

