$( function() {
  var content = $( '.content' ),
      classSidebar = 'content ';

  $( 'a.sidebar-left-toggle' ).click( function() {
    content.removeClass();
    content.addClass( classSidebar +'sidebar-left' );
  });

  $( 'a.sidebar-right-toggle' ).click( function() {
    content.removeClass();
    content.addClass( classSidebar + 'sidebar-right' );
  });

  $( 'a.no-sidebar-toggle' ).click( function() {
    content.removeClass();
    content.addClass( classSidebar + 'no-sidebar');
  } );

  $( 'a.hide-sidebar-toggle' ).click( function() {
    if( !content.hasClass( 'hide' ) )
      content.addClass( 'hide' );
    else
      content.removeClass( 'hide' );
  } );

  // Drastically modified from the function in the WordPress Twenty Fifteen theme
  // Original source: https://github.com/WordPress/WordPress/blob/master/wp-content/themes/twentyfifteen/js/functions.js

  $( '.dropdown-toggle' ).click( function( e ) {
    var _this = $( this );

    e.preventDefault();

    _this.toggleClass( 'toggle-on' );
    _this.parent().next( '.sub-menu' ).toggleClass( 'toggled-on' );
    _this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
    _this.html( _this.html() === '<span class="screen-reader-text">Expand child menu</span>' ? '<span class="screen-reader-text">Collapse child menu</span>' : '<span class="screen-reader-text">Expand child menu</span>' );
  } );
});