$( function() {
  var sidebar = $( '.sidebar' ),
      content = $( '.content' ),
      classSidebar = 'content ';

  $( 'a.sidebar-left-toggle' ).click( function() {
    /*if( !sidebar.hasClass( 'sidebar-left' ) ) {
      sidebar.addClass( 'sidebar-left' );
      //removeNoSidebar( content );
    }*/

    //sidebar.data( 'align' ) = 'right';
   //console.log( sidebar.data( 'align' ) );

    content.removeClass();
    content.addClass( classSidebar +'sidebar-left' );
  });

  $( 'a.sidebar-right-toggle' ).click( function() {
    //if( sidebar.hasClass( 'sidebar-right' ) )
    //  sidebar.removeClass( 'sidebar-right' );
    //else
    content.removeClass();
    content.addClass( classSidebar + 'sidebar-right' );

    //}
  });

  $( 'a.no-sidebar-toggle' ).click( function() {
    content.removeClass();
    content.addClass( classSidebar + 'no-sidebar');

   /* if( !content.hasClass( 'no-sidebar' ) )
      content.addClass( 'no-sidebar' );
    else
      content.removeClass( 'no-sidebar' );*/
  } );

  $( 'a.hide-sidebar-toggle' ).click( function() {
    if( !content.hasClass( 'hide' ) )
      content.addClass( 'hide' );
    else
      content.removeClass( 'hide' );

    //content.removeClass();
    //content.addClass( classSidebar + 'hide' );
  } );

/*  function removeNoSidebar( el ) {
    if( el.hasClass( 'no-sidebar' ) )
      el.removeClass( 'no-sidebar' );
  }*/
});