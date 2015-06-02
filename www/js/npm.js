$(document).ready(function() {
    var cont = document.getElementById("hello");
    var a = [];

    function disp( divs ) {
        for ( var i = 0; i < divs.length; i++ ) {
            a.push( divs[ i ].innerHTML );
        }

        $(cont).append($(a));
    }
    $("#sort").click(function(){
        a.sort();

    });
    disp( $( ".tmp" ).toArray().reverse() );


});
