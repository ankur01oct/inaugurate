$(document).ready(function() {
    if($("#container").css("zoom") === undefined){
        $("#container").addClass("noZoom");
    }

$(".drag").draggable({
    opacity: 0.75,
    stack: ".drag",
    axis: "x",
    containment: "parent",
    stop: function(e, ui){
         selectBox($(this));  
    }
})

.resizable({
    aspectRatio: true,
    handles: "all",
    autoHide: true
});

$(".drag").click(function(){
    selectBox($(this));
});

$("#container").click(function(){
    $(".drag").removeClass("selectedBorder");
}).children().click(function(){
    return false;
});


function selectBox(element){
  let circ1Position = $('#circle1').position();
  let circ2Position = $('#circle2').position();

  if(circ2Position.left - circ1Position.left < 200) {
    alert ('trigger model')
  }  
}
});
