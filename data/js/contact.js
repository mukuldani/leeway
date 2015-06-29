function contactForm() {
    var contactFormHost = 'http://reachus-leeway.herokuapp.com',
        form = "",
        notice = $('#reachus_message'),
        sendingIndicator = $('#sndg-msg-rchus,#loading-indicator-rchus'),
        str = $(location).attr('pathname'),
        urlByPart = ""; 
    //for contact page
    if(str.match(/index/gi)!==null){
        urlByPart = '/send_email';
        form = $('#contact-us-leeway');
    }
    //for careers page
    if(str.match(/careers/gi)!==null){
        urlByPart = '/send_resume';
        form = $('#careers-leeway');
    }
    //form sending and response management
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