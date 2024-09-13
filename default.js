var url = 'https://script.google.com/macros/s/AKfycbz8fCIZtUyOFt_HeJrEXl8PfiWdc1vXwPlvYlSWg3aNNdYLOARWGyg6px6pAfh2Ww0R/exec'
var current = 'summary';

var loader = '<div class="progress"><div class="indeterminate"></div></div><div style="margin-bottom:30vh;margin-top:15vh;" class="row container teal-text text-lighten-4 valign-wrapper"><h1 class="white-text vertical" style="margin-top:-1vh ;position:absolute; left:32vw; font-size: 15vh;"><b>弥助</b></h1><img class="col s1 left-align" style="z-index:999; margin-right:-22vw ; height: 50vh; width: auto;" src="attacking.gif"></img><h2 class="loading col s7" style="font-size: 5vw;margin-top:15vh;"><b>Exploring</b></h2></div>'

function action(action, e) {
    var xhr = new XMLHttpRequest();
    $("#nav-mobile").children().removeClass("active");
    $("#"+action).addClass("active");
    $("main").html(loader);
    // console.log(action);
    xhr.open('GET',  url + '?callback=ctrlq&action=' + action);
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === XMLHttpRequest.DONE &&
          xhr.status === 200) {
        var result = JSON.parse(e.target.response);
        $("main").html(result);
        inits();
      }
    }
    xhr.send();
    
}


function inits(){
  $('.parallax').parallax();
}

$(document).ready(function(){
  $('.slider').slider();
	$('.modal').modal({});
  inits();
});

action('summary');
// $("main").html(loader);