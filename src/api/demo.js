
import api from '@/libs/api'
export default {
    // 获取movie接口
    getMovie (data) {// https://movie.querydata.org/api?id=33410979
      return api.get('/api',data);
    },
  }