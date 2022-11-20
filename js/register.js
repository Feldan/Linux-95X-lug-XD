$.ajax({
    type: 'POST',
    url: "https://www.xiaohao2333.top:30000/v1/verify-codes/captcha",
    data: {},
    dataType: 'JSON',
    success: function (jsondate) {
        let images = jsondate.data.captcha_image;
        let imagesId = jsondate.data.captcha_id;
        let gender = parseInt($('#gender').val(),);
        // console.log(jsondate.data.captcha_id)
        $("#captcha_image").attr('src', images);

        function GetJsonData() {
            var json = {
                name: $('#name').val(),
                id: $('#id').val(),
                gender: gender,
                phone: $('#phone').val(),
                email: $('#email').val(),
                reason: $('#reason').val(),
                code: $('#code').val(),
                captcha_id:imagesId,
                captcha_answer: $('#captcha_answer').val()
            };
            return json;
        }
        // console.log(GetJsonData());
        // console.log(JSON.stringify(GetJsonData()));
        $('#btn').click(function () {
            $.ajax({
                type: "POST",
                contentType: 'application/json',
                url: "https://www.xiaohao2333.top:30000/v1/verify-codes/reg",
                data: JSON.stringify(GetJsonData()),
                success: function (registerdate) {
                    alert("信息: " + registerdate.message +"🎉");
                    $("#captcha_image").attr('src', 'https://passionpenguin.gitee.io/aru/resources/ARU-6.6-PNG-S/PNG-S/0510.png');
                    location.reload(true);
                },
                error: function (status) {
                    // console.log(status.responseJSON.errs);
                    // console.log(errors);
                    errors=status.responseJSON.errs
                    caotcha_err=status.responseJSON.errs.captcha_answer 
                    codeid_err=status.responseJSON.errs.codeid
                    name_err=status.responseJSON.errs.name
                    phone_err=status.responseJSON.errs.phone
                    $("#captcha_image").attr('src', 'https://passionpenguin.gitee.io/ARU/resources/ARU-6.6-PNG-S/PNG-S/0120.png');
                    alert("信息: " + JSON.stringify(errors));

                }
                
            });
        });

    },
    error: function (xhr, status, error) {
        // $("#captcha_image").attr('alt', status + ",验证码被玩坏了");
        $("#captcha_image").attr('src', 'https://passionpenguin.gitee.io/ARU/resources/ARU-6.6-PNG-S/PNG-S/2080.png');
        alert("信息: " + "😥8要再请求啦");
    }
});