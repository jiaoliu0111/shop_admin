import axios from 'axios'
export default {
  data () {
    return {
      usersData: [],
      // name,
      // email,
      // tel
      total: 0,
      pagesize: 3,
      pagenum: 1
    }
  },
  created () {
    axios.get('http://localhost:8888/api/private/v1/users', {
      params: {
        query: '',
        pagenum: 1,
        pagesize: 3
      },
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then(res => {
      console.log(res)
      if (res.data.meta.status === 200) {
        this.usersData = res.data.data.users
        this.total = res.data.total
        this.pagenum = res.data.pagenum
      }
    })
  }
}
