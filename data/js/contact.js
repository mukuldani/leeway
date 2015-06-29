function contactForm() {
    var contactFormHost = 'http://reachus-leeway.herokuapp.com',
        form = $('#contact-us-leeway'),
        notice = $('#reachus_message'),
        sendingIndicator = $('#sndg-msg-rchus,#loading-indicator-rchus'),
        str = $(location).attr('pathname'),
        urlByPart = ""; 
    if(str.match(/index/gi)!==null){
        urlByPart = '/send_email';
    }
    if(str.match(/index/gi)!==null){
        urlByPart = '/send_resume';
    }
    if (form.length) {
        $.ajax({
            type: 'POST',
            url: contactFormHost + urlByPart,
            data: form.serialize(),
            dataType: 'json',
            success: function(response) {
                switch (response.message) {
                    case 'success':
                        notice.text(notice.data('success')).fadeIn();
                        sendingIndicator.hide();
                        form [0].reset();
                        break;

                    case 'failure_email':
                        notice.text(notice.data('error')).fadeIn();
                        sendingIndicator.hide();
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                notice.text(notice.data('error')).fadeIn();
            }
        });

    }
    return false;
}
$(document).ready(function(){
    $("#submit").click(function(){
        $("#overlay, #popup").fadeIn();
        return contactForm();
    });
    $(document).ajaxComplete(function(event, request, settings) {
        $('#popup,#overlay').fadeOut(6000);
    });
});