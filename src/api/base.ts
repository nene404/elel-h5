import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000
}) //创建一个实例，配置允许请求对象的一些属性（如请

export default instance
