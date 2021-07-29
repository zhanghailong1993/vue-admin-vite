// import { http } from '../utils/http'
import axios from 'axios'

export const getAsyncRoutes = (data?: object): any => {
  return axios.get('/getAsyncRoutes', {
    params: data
  })
}