function daiSaluta (variabile) {
  if (variabile == 'fr') {
    console.log("salut");
  } else if (variabile == 'it') {
    console.log("ciao");
  } else {
    console.log("hello");

  }
}


$( document ).ready(function() {
  // console.log( "ready!" );
  $( ".rettangolo" ).each(
    function( index ) {
    // console.log( index + ": " + $( this ).text() );
    // daiSaluta();
    $( this ).css( { "left" : Math.random() * window.outerWidth , "top" : Math.random() * (window.outerHeight * 0.6) } );


  });
  
});

