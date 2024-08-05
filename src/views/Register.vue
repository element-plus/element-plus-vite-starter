<template>
  <div class="login">
    <div class="login-image">
      <el-image :src="LoginPage" style="max-width: 700px;"></el-image>
    </div>
    <div class="login-box">
      <el-tabs @tab-click="userTabClickHandler">
        <el-tab-pane label="我是买家">
        </el-tab-pane>
        <el-tab-pane label="我是卖家">
        </el-tab-pane>
      </el-tabs>
      <div class="mid">
        <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon>
          <el-form-item prop="userName">
            <el-input class="info" v-model="dataForm.userName" placeholder="帐号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input class="info" v-model="dataForm.password" type="password" Y placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item prop="confirmedPassword">
            <el-input class="info" v-model="dataForm.confirmedPassword" type="password" Y placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" value="login" @click="dataFormSubmit()">注册</el-button>
            <el-button type="info" value="register" @click="LoginClick()">前往登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import LoginPage from '../assets/LoginPage.png'
import axios from 'axios';

export default {
  data() {
    return {
      LoginPage,
      dataForm: {
        userType: 'buyer',
        userName: '',
        password: '',
        confirmedPassword: '',
      },
      dataRule: {
        userName: [
          { required: true, message: '帐号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        confirmedPassword: [
          { validator: this.confirmedPasswordValiadator, trigger: 'blur' },
          // { required: true, message: '请再次输入密码', trigger: 'blur'}
        ]
      },
      loginUrl: '',
    }
  },
  methods: {
    // 提交表单
    dataFormSubmit() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          // axios.post(this.registerUrl, this.dataForm, {
          //   headers: {
          //     'Content-Type': 'application/json'
          //   }
          // }).then((res) => {
          //   if (res.data.accessToken) {
          //     localStorage.setItem('Authorization', 'bearer ' + res.data.accessToken)
          //     // 路由到主页 replace 是页面替换 一般可以用于局部组件路由
          //     // push 是整体 推 页面
          //     this.$router.replace({name: 'home'})
          //   } else {
          //     this.$router.replace({name: 'login'})
          //   }
          // })
        }
      })
    },
    LoginClick() {
      this.$router.replace({ path: '/login' });
      // console.log(this.activeName);
    },
    userTabClickHandler(pane, event) {
      // console.log(pane.index);
      this.dataForm.userType = pane.index == 0 ? 'buyer' : 'seller';
    },
    confirmedPasswordValiadator(rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.dataForm.password) {
        callback(new Error("两次输入的密码不同"))
      } else {
        callback()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  gap: 20x;
  width: 100%;
  height: 100%;
  // background: url(~@/assets/img/login-bg.png) no-repeat;
  box-sizing: border-box;
  background-size: cover;
  position: fixed;
}

.login-image {
  margin-top: 5%;
  margin-left: 10%;
}

.login .login-box {
  position: absolute;
  left: 80%;
  transform: translateX(-50%);
  height: 100%;
  padding-top: 5%;
}

.login .login-box .top {
  margin-bottom: 30px;
  text-align: center;
}

.login .login-box .top .logo {
  font-size: 0;
}

.login .login-box .top .company {
  font-size: 16px;
  margin-top: 10px;
}

.login .login-box .mid {
  font-size: 14px;
}

.login .login-box .mid .item-btn {
  margin-top: 20px;
}

.login .login-box .mid .item-btn input {
  border: 0;
  width: 100%;
  height: 40px;
  box-shadow: 0;
  background: #1f87e8;
  color: #fff;
  border-radius: 3px;
}

.info {
  width: 410px;
}

.login-captcha {
  height: 40px;
}

.login .login-box .bottom {
  position: absolute;
  bottom: 10%;
  width: 100%;
  color: #999;
  font-size: 12px;
  text-align: center;
}
</style>