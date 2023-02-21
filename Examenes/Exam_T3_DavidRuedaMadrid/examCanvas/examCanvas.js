//It receives an identifier of the canvas element and loads the canvas
//Returns the canvas context or FALSE if it could not be obtained.
function loadCanvasContext(idCanvas){
   var element = document.getElementById(idCanvas);
   if(element && element.getContext){
      var context = element.getContext('2d');
      if(context){
         return context;
      }
   }
   return false;
}

window.onload = function(){
  var ctx = loadCanvasContext('mycanvas');
  if(ctx){
    ctx.beginPath();
    //Start of the staircase
    ctx.moveTo(1,1);
    var x = 1, y = 1;
    //Loop fot the making of the staircase
    for(var i = 0; i <= 31; i++){
      x = x + 10;
      ctx.lineTo(x,y);
      ctx.stroke();
      ctx.moveTo(x,y);
      y = y + 10;
      ctx.lineTo(x,y);
      ctx.stroke();
      ctx.moveTo(x,y);
    }
    //Shaping of the exterior
    ctx.moveTo(1,1);
    ctx.lineTo(1,321);
    ctx.stroke();
    ctx.moveTo(1,321);
    ctx.lineTo(322,321);
    ctx.stroke();
  }
}