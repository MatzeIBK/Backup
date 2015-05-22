$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(450);
/*
    $('.js').click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(500, newpage);
    });

    function newpage() {

        window.location = newLocation;

    }
*/

    var wantedHeight = $(window).height();
    var wantedWidth = $(window).width();

    $('#test').css('height', wantedHeight);
    $('#test').css('width', wantedWidth);

});