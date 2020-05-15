var $burger = $("#burger-icon");
var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
var isVisible = false;

function mouseClick(){

    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
}

$burger.on( "click", mouseClick);
// close the mobile menu when menu link is clicked
<<<<<<< HEAD
$navA.on( "click", mouseClick);
=======
$navA.on( "click", mouseClick);
>>>>>>> 031b9a4688bdf05a9a47a81be86ca32256cbddb9
