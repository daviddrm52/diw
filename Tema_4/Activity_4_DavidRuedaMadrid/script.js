$( function() {
  $( "#post-it-rojo" ).draggable();
  $( "#post-it-rojo" ).resizable();
  $( "#contenedor-rojo" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Post-it rojo entregado!" );
    }
  });
} );

$( function() {
  $( "#post-it-naranja" ).draggable();
  $( "#post-it-naranja" ).resizable();
  $( "#contenedor-naranja" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Post-it naranja entregado!" );
    }
  });
} );

$(function () {
    $( "#post-it" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Delete all items": function() {
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  } );