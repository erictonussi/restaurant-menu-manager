(function($) {
// $( "#tabs" ).tabs();
$( "#tabs" ).tabs({
  activate: function(event, ui) {
    window.location.hash = ui.newPanel.attr('id');
  }
}).addClass("ui-tabs-vertical ui-helper-clearfix").removeClass('ui-widget ui-widget-content');
$( "#tabs ul" ).removeClass( "ui-corner-all ui-helper-clearfix ui-helper-reset ui-widget-header" );//.addClass( "ui-corner-left" );
$( "#tabs li" ).removeClass( "ui-corner-top " );//.addClass( "ui-corner-left" );
})(jQuery);
