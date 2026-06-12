jQuery(document).ready(function($) {
    $('.paper.expand').click(function(event) {
        var text = window.getSelection().toString();
        var tag = event.target.tagName.toLowerCase();
        if ((text.length == 0) && (tag != 'a')) {
            paper = $(this);
            var popup = paper.find('.popup');
            if (popup.length > 0) {
                popup.slideToggle('fast');
                paper.toggleClass('expanded');
            }
        }
    });
    $('#output').focus();
});

$(window).scroll(function(){
    var scrollTop = $(document).scrollTop();
    var anchors = $('body').find('div');

    for (var i = 0; i < anchors.length; i++){
        if (scrollTop > $(anchors[i]).offset().top - 100 && scrollTop < $(anchors[i]).offset().top + $(anchors[i]).height() - 100) {
            $('nav a[href="#' + $(anchors[i]).attr('id') + '"]').addClass('active');
        } else {
            $('nav a[href="#' + $(anchors[i]).attr('id') + '"]').removeClass('active');
        }
    }
});
