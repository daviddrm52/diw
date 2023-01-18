var counter = 0;
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
        $(this).html("You have "+($(this).data("counter"))+" post-it stored.");
      }  
    }
  });

  //Zona de los post-it naranjas
  $("#post-it-naranja").draggable().click(function() {
    $(this).draggable( {disabled: false});
    }).dblclick(function() {
    $(this).draggable({ disabled: true });
  });  
  $( "#post-it-naranja" ).data("classified", false);
  $( "#post-it-naranja" ).data("counter", 0);
  $( "#contenedor-naranja" ).droppable({
    drop: function( event, ui ) {
      if(!ui.draggable.data("classified")){
        counter = $(this).data("counter");
        counter++;
        $(this).data("counter", counter);
        ui.draggable.data("classified", true);
        $(this).html("You have "+($(this).data("counter"))+" post-it stored.");
      }  
    }
  });

  $( "#btn-max-rojo, #btn-max-naranja" ).on( "click", function( event ) {
    event.preventDefault();
    console.log("bing chiling");
  } );

  $("#btn-close-naranja").on( "click", function( event ) {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Delete": function() {
          $("#post-it-naranja").remove();
          $( this ).dialog( "close" );
        },
        "Cancel": function() {
          $( this ).dialog( "close" );
        }
      }
    });
  });

  $("#btn-close-rojo").on( "click", function( event ) {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Delete": function() {
          $("#post-it-rojo").remove();
          $( this ).dialog( "close" );
        },
        "Cancel": function() {
          $( this ).dialog( "close" );
        }
      }
    });
  });

  $( "#btn-create-naranja" ).on( "click", function( event ) {
    console.log("hung tao");
    jQuery('<div>', {
      id: 'post-it-naranja',
      class: 'post-it-naranja'
    }).appendTo('.post-it-area');
    $('.post-it-naranja').append('<button id="btn-close-naranja" style="float: right; margin: 2px;"><span class="material-symbols-outlined">close</span></button>');
    $('.post-it-naranja').append('<button id="btn-min-naranja" style="float: right; margin: 2px;"><span class="material-symbols-outlined">minimize</span></button>');
    $('.post-it-naranja').append('<p> </p>');
  });
});


