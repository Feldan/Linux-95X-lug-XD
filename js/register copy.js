$.post("https://www.xiaohao2333.top:25566/v1/verify-codes/captcha", function (jsondate) {
    let images = jsondate.data.captcha_image;
    let imagesId = jsondate.data.captcha_id
    console.log(jsondate.data.captcha_id)
    $("#captcha_image").attr('src', images);
    $('#btn').click(function () {
        $.post("https://www.xiaohao2333.top:25566/v1/verify-codes/reg", data = {
            name: $('#name').val(),
            id: $('#id').val(),
            gender: $('#gender').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
            reason: $('#selector').val(),
            code: $('#code').val(),
            captcha_id: imagesId,
            captcha_answer: $('#captcha_answer').val()
        }, function (registerdate) {
            console.log();
            alert("信息: " + registerdate);
        }, JSON)
    }, JSON);
})