$( function() {
  //Zona de los post-it rojos
  $( "#post-it-rojo" ).draggable();
  $( "#post-it-rojo" ).data("classified", false);
  $( "#post-it-rojo" ).data("counter", 0);
  $( "#contenedor-rojo" ).droppable({
    drop: function( event, ui ) {
      if(!ui.draggable.data("classified")){
        counter = $(this).data("counter");
        counter++;
        $(this).data("counter", counter);
        ui.draggable.data("classified", true);
        $.html("Tienes "+($(this).data("counter"))+" post-it aparcados.");
    
      }  
    }
  });

  //Zona de los post-it naranjas
  $( "#post-it-naranja" ).draggable();
  $( "#contenedor-naranja" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .html("Has entregado un post-it");
    }
  });

  $( "#btn-max-rojo, #btn-max-naranja" ).on( "click", function( event ) {
    event.preventDefault();
    console.log("bing chiling");
  } );

  $("#btn-close-rojo, #btn-close-naranja").on( "click", function( event ) {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Eliminar": function() {
          $( this ).dialog( "close" );
          $( this ).parent().remove();
        },
        "Cancelar": function() {
          $( this ).dialog( "close" );
        }
      }
    });
  } );
} );


