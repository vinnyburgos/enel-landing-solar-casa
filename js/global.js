var globalFunctions = {
    scrollTo: function(el) {
        $(el).on('click', function(e) {
            e.preventDefault();
            var target = this.hash,
                $target = $(target).offset();
            $('html, body').stop().animate({ 'scrollTop': $target.top + 2 }, 500, 'swing');
        });
    },
    fakeSubmit: function() {
        $('#btn-submit').on('click', function(e) {
            e.preventDefault();
            $('#pratil').submit();
        });
    },
    onInit: function() {
        this.scrollTo('a[href^="#"]');
        this.fakeSubmit();
        this.submit();
    },
    submit: function() {
        $("form").submit(function(event) {
            window.open('ebook_pratil_cobranca_facil.pdf', '_blank');
        });
    },
}

$(document).ready(function() {
    globalFunctions.onInit();
});