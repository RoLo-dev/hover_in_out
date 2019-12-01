$('body').ready(function(){
    $('img').hover(function(){
        if ($(this).attr('holder') == '') {
            $(this).attr('holder', $(this).attr('src'))
            $(this).attr('src', $(this).attr('data-alt-src'));
        } else if ($(this).attr('holder').length > 0) {
            $(this).attr('src', $(this).attr('holder'));
            $(this).attr('holder', '');
        }
    })
});