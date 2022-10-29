# 咕咕咕签到姬API文档 v0.1.0

后端仓库: https://github.com/GK-GNU-Linux/Goo_Sign

### 1、生成图片验证码

- 请求URL
  ```text
  https://www.xiaohao2333.top:25566/v1/verify-codes/captcha
  ```
- 请求方式
  ```text
  POST
  ```
- 请求参数
  
  无

- 响应示例
  ```json
  {
    "code": 200,
    "data": {
        "captcha_id": "OSb2y4tkYA0GUq9GztMT",
        "captcha_image": "data:image/png;base64,a...n==",
    },
    "message": "生成验证码"
    }
  ```

### 2、注册用户

- 请求URL
  ```text
  https://www.xiaohao2333.top:25566/v1/verify-codes/reg
  ```
- 请求方式
  ```text
  POST
  ```
- 请求参数
  ```json
  {
    "id": "学号",
    "name": "姓名",
    "gender": 1 || 0 (tinyint{男,女}),
    "phone": "手机号码",
    "email": "个人邮箱",
    "reason": "加入理由或愿景",
    "code": "邀请码(测试用12345678)",
    "captcha_id": "图片验证码ID",
    "captcha_answer": "图片验证码答案",
  }
  ```
- 响应示例
  ```json
  {
    "code": 200,
    "message": "注册成功",
  }
  ```
  

