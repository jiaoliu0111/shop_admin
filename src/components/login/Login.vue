<template>
  <el-row class='login' type='flex' justify="center" align='middle'>
    <el-col :xs="14" :sm="12" :md="10" :lg="8" >
      <el-form  label-position='top' :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm login-form">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type='password'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm( )">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
//  导入axios
import axios from 'axios'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      console.log('$refs:', this.$refs)
      this.$refs.loginForm.validate((valid) => {
        if (!valid) {
          return false
        }
        // 验证成功：
        axios.post('http://localhost:8888/api/private/v1/login', this.loginForm).then(res => {
          console.log(res)
          if (res.data.meta.status === 200) {
            //  将token标识 存储到 localStorage 中
            localStorage.setItem('token', res.data.data.token)
            // 跳转到首页
            this.$router.push('/home')
            // 消息提示
            this.$message({
              message: '登录成功',
              type: 'success',
              duration: 800
            })
          } else {
            this.$message({
              message: '登录失败',
              type: 'error',
              duration: 1000
            })
          }
        })
      })
    },
    //  表单重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
  .login-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
  }
  .login {
    height: 100%;
    background-color: #2D434C;
  }
</style>
