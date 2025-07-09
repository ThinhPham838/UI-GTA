// import Global from '../global/Global';
import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import store from '../app/store';

// Config Timeout cho tất cả api (1min)
axios.defaults.timeout = 60000;
axios.defaults.timeoutErrorMessage = 'timeout';

export const GetHeader = () => {
  const token = Cookies.get('token');
  const tokenSave = store.getState().user.token;
  return {
    Authorization: `Bearer ${tokenSave || token}`
  };
};

const HandleError = (error: any) => {
  console.log('api HandleError', error.response?.status, error);
  if (error.response) {
    if (error.response.status === 403) {
      // Không có quyền
    } else if (error.response.status === 401) {
      Cookies.remove('accessToken');
      Cookies.remove('token');
      Cookies.remove('refreshToken');
      localStorage.removeItem('role');
      localStorage.clear();
      window.location.href = '/';
    }
  }
  throw error.response?.data || { message: 'Unknown error', error: true };
};

const buildUrl = (path: string, baseUrl?: string): string => {
  const root = (baseUrl || process.env.url_gta || '').replace(/\/$/, '');
  const endpoint = path.replace(/^\//, '');
  return `${root}/${endpoint}`;
};

interface IApiService {
  GET: (path: string, customeURL?: string, timeout?: number) => Promise<AxiosResponse<any> | any>;
  POST: (
    path: string,
    data: any,
    customeURL?: string,
    timeout?: number,
    withAuth?: boolean
  ) => Promise<AxiosResponse<any> | any>;
  PUT: (path: string, data: any, customeURL?: string) => Promise<AxiosResponse<any> | any>;
  DELETE: (path: string, data?: any, customeURL?: string) => Promise<AxiosResponse<any> | any>;
}

const ApiService: IApiService = {
  GET: (path, customeURL, timeout) => {
    return axios
      .get(buildUrl(path, customeURL), {
        headers: GetHeader(),
        timeout
      })
      .catch(HandleError);
  },

  POST: (path, data, customeURL, timeout, withAuth = true) => {
    return axios
      .post(buildUrl(path, customeURL), data, {
        headers: withAuth ? GetHeader() : {},
        timeout
      })
      .catch(HandleError);
  },

  PUT: (path, data, customeURL) => {
    return axios
      .put(buildUrl(path, customeURL), data, {
        headers: GetHeader()
      })
      .catch(HandleError);
  },

  DELETE: (path, customeURL) => {
    return axios
      .delete(buildUrl(path, customeURL), {
        headers: GetHeader()
      })
      .catch(HandleError);
  }
};

export default ApiService;
