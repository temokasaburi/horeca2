$( "#burger-btn" ).click(function() {
    event.preventDefault();
    $( "div.buregrmenu" ).toggleClass('open');
    $( 'html' ).toggleClass('overflow-h');
});

$( ".search-drop-toggle" ).click(function() {
    event.preventDefault();
    $( "section.search-section" ).toggleClass('open');
    $( 'html' ).toggleClass('overflow-h');
});
