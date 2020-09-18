jQuery(function($) {
    var form = $('#popup-form');
    var action = form.attr('action');

    function submit_form() {
        $.ajax({
            url: action,
            data: form.serialize(),
            type: form.attr('method'),
            beforeSend: function(xhr) {},
            success: function(data) {
                $('#popup-form').html(data);
            }
        });
        return false;
    }
    form.submit(function(e) {
        e.preventDefault()
        submit_form()
    })
});