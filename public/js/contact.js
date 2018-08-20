(function($) {
    "use strict";


    /* Contact Form
        * ------------------------------------------------------ */
var clContactForm = function() {

    /* local validation */
    $('#contactForm').validate({

        /* submit via ajax */
        submitHandler: function(form) {

            var sLoader = $('.submit-loader');

            $.ajax({

                type: "POST",
                url: "https://docs.google.com/forms/d/e/1FAIpQLSe0smSK2f8ILup4yoR9-if17H70u-LaAb-tyTFdv1svgZajtw/formResponse",
                data: $(form).serialize(),
                beforeSend: function() {

                    sLoader.slideDown("slow");

                },

                statusCode: {
                    0: function() {
                        //Success message
                        sLoader.slideUp("slow");
                        $('.message-warning').fadeOut();
                        $('#contactForm').fadeOut();
                        $('.message-success').fadeIn();
                    },
                    200: function() {
                        //Success Message
                        sLoader.slideUp("slow");
                        $('.message-warning').fadeOut();
                        $('#contactForm').fadeOut();
                        $('.message-success').fadeIn();
                    }
                }
            });
        }

    });
};

    /* Initialize
        * ------------------------------------------------------ */
    (function ssInit() {


        clContactForm();


    })();


})(jQuery);