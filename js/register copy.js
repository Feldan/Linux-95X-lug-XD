function GetJsonData() {
    var json = {
        name: $('#name').val(),
        id: $('#id').val(),
        gender: $('#gender').val(),
        phone: $('#phone').val(),
        email: $('#email').val(),
        reason: $('#selector').val(),
        code: $('#code').val(),
        captcha_answer: $('#captcha_answer').val()
    };
    return json;
}
console.log(GetJsonData());
$('#btn').click(function () {
    $.ajax({
        type: "POST",
        url: "https://www.xiaohao2333.top:30000/v1/verify-codes/reg",
        data: JSON.stringify(GetJsonData()),
        //  {
        //     name:$('#name').val(),
        //     id:$('#id').val(),
        //     gender:$('#gender').val(),
        //     phone:$('#phone').val(),
        //     email:$('#email').val(),
        //     reason:$('#selector').val(),
        //     code:$('#code').val(),
        //     captcha_id:imagesId,
        //     captcha_answer:$('#captcha_answer').val()
        // },
        dataType: "JSON",
        success: function (registerdate) {
            console.log();
            alert("信息: " + registerdate);
        }
    });
});