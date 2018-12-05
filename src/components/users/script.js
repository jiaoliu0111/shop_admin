import axios from 'axios'
export default {
  data () {
    return {
      usersData: [],
      // name,
      // email,
      // tel
      total: 0,
      pagesize: 2,
      pagenum: 1
    }
  },
  created () {
    this.getUsersList() // ???this指代什么
  },
  methods: {
    getUsersList (pagenum = 1, pagesize = 2, query = '') {
      axios.get('http://localhost:8888/api/private/v1/users', {
        params: {
          query,
          pagenum,
          pagesize
        },
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }).then(res => {
        console.log(res)
        if (res.data.meta.status === 200) {
          this.usersData = res.data.data.users
          this.total = res.data.data.total
          this.pagenum = res.data.data.pagenum
        } else {
          this.$router.push('/login')
          localStorage.removeItem('token')
        }
      })
    },
    //  切换页码
    changePage (curPage) {
      console.log('当前页是：', curPage)
      this.getUsersList(curPage) // 1- 切换渲染新页面 2- 在请求渲染成功的回调里面把返回的pagenum赋值给动态绑定的current-page
    }

  }
}
