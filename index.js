var full_height = $(document).height() - $(window).height();
console.log(full_height);

$(window).scroll(function (){

    var opac = ($(window).scrollTop()*2)/full_height;

    // if (opac<=1){
    //     $('#Nav').css('background-color', 'rgba(255,255,255,'+opac+')');
    // }
    $('Nav').css('background-color', 'rgba(255,255,255,'+opac+')');
    console.log(opac);
});