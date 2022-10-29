$.ajax({
    type: 'POST',
    url: "https://www.xiaohao2333.top:25566/v1/verify-codes/captcha",
    data: {},
    dataType: 'JSON',
    success: function (jsondate) {
        let images = jsondate.data.captcha_image;
        let imagesId = jsondate.data.captcha_id
        console.log(jsondate.data.captcha_id)
        $("#captcha_image").attr('src', images);
        $('#btn').click(function(){
            $.ajax({
                type: "POST",
                url: "https://www.xiaohao2333.top:25566/v1/verify-codes/reg",
                data: {
                    name:$('#name').val(),
                    id:$('#id').val(),
                    gender:$('#gender').val(),
                    phone:$('#phone').val(),
                    email:$('#email').val(),
                    reason:$('#selector').val(),
                    code:$('#code').val(),
                    captcha_id:imagesId,
                    captcha_answer:$('#captcha_answer').val()
                },
                dataType: "JSON",
                success: function (registerdate) {
                    console.log();
                    alert("信息: " + registerdate);   
                }
            });
        });
    },
    error: function (xhr, status, error) {
        $("#captcha_image").attr('alt', status + ",验证码被玩坏了");
        $("#captcha_image").attr('src', 'https://passionpenguin.gitee.io/ARU/resources/ARU-6.6-PNG-S/PNG-S/2080.png');
        alert("信息: " + "😥8要再请求啦");
    }
});

