<template>
  <div class="loginG loginBg">
    <div class="bodyWidth loginc">
      <div class="bodyWidth loginc">
        <div class="indexLoginBox login-box">
          <h2>用户登录</h2>
          <el-form autoComplete="on"
                   :model="loginForm"
                   :rules="loginRules"
                   ref="loginForm"
                   class="demo-infoForm">


            <el-form-item prop="username">

              <el-input name="username"
                        type="text"
                        v-model="loginForm.username"
                        autoComplete="on"
                        placeholder="请输入用户名"
                        prefix-icon="loginIcon icon-user2">
                <span slot="prefix">
                  <svg-icon icon-class="user" class="color-main"></svg-icon>
                </span>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input name="password"
                        :type="pwdType"
                        @keyup.enter.native="handleLogin"
                        v-model="loginForm.password"
                        autoComplete="on"
                        placeholder="请输入密码"
                        prefix-icon="loginIcon icon-pwd2">
                <span slot="prefix">
                  <svg-icon icon-class="password" class="color-main"></svg-icon>
                </span>
                <span slot="suffix" @click="showPwd">
                <svg-icon icon-class="eye" class="color-main"></svg-icon>
              </span>
              </el-input>
            </el-form-item>
            <el-form-item class="formBtn">
              <el-button type="primary" :loading="loading" @click.native.prevent="handleLogin">
                登录
              </el-button>
            </el-form-item>
          </el-form>
          <div class="loginReg">
            <span style="float: right;">还没有账号？<router-link to="/reg">注册</router-link></span>
            <router-link style="float: left;" to="/backPwd">忘记密码？</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {isvalidUsername} from '@/utils/validate';
  import {setSupport,getSupport,setCookie,getCookie} from '@/utils/support';
  export default {
    name: 'login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value.length < 3) {
          callback(new Error('密码不能小于3位'))
        } else {
          callback()
        }
      };
      return {
        loginForm: {
          username: '',
          password: '',
        },
        loginRules: {
          username: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePass}]
        },
        loading: false,
        pwdType: 'password',
        dialogVisible:false,
        supportDialogVisible:false
      }
    },
    created() {
      this.loginForm.username = getCookie("username");
      this.loginForm.password = getCookie("password");
      if(this.loginForm.username === undefined||this.loginForm.username==null||this.loginForm.username===''){
        this.loginForm.username = '';
      }
      if(this.loginForm.password === undefined||this.loginForm.password==null){
        this.loginForm.password = '';
      }
    },
    methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            // let isSupport = getSupport();
            // if(isSupport===undefined||isSupport==null){
            //   this.dialogVisible =true;
            //   return;
            // }
            this.loading = true;
            this.$store.dispatch('Login', this.loginForm).then(() => {
              this.loading = false;
              setCookie("username",this.loginForm.username,15);
              setCookie("password",this.loginForm.password,15);
              this.$router.push({path: '/'})
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('参数验证不合法！');
            return false
          }
        })
      },
      handleTry(){
        this.dialogVisible =true
      },
      dialogConfirm(){
        this.dialogVisible =false;
        setSupport(true);
      },
      dialogCancel(){
        this.dialogVisible = false;
        setSupport(false);
      }
    }
  }
</script>
<style>
  @import url("../../assets/css/view.css");
</style>

<style scoped>
  .loginReg a {
    /*color: #018ffb;*/
    color:#DD4A68;
    text-decoration: none;
  }

  .loginReg a:hover {
    filter: Alpha(opacity=60);
    opacity: .6;
  }
  .indexLoginBox {

    background: rgba(255, 255, 255, 0.4);
    padding: 60px 30px 40px;
    margin: 0 auto;
  }

  .indexLoginBox>h2 {
    font-weight: normal;
    font-size: 18px;
    padding-bottom: 20px;
  }
</style>
