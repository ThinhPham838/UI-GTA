import BaseApi from '../BaseApi';
import Global from '../../config/Config';
// import { IFC } from '../../models/GroupUserTranfer';

interface IAdministrationApi {
  GetAllDataCenter: () => Promise<any>;

  GetUserByCompany: (companyId: string | number) => Promise<any>;

  // ----------- TMS ---------------------------------------
  GetAllUserTMS: (pageIndex: number, pageSize: number) => Promise<any>;
  // Laays thoong tin taif khoanr theo user name
  GetUserNameInfo: (username: any) => Promise<any>;
  UpdateAccountTMS: (dataBody: any) => Promise<any>;
  CreateAccountTMS: (dataBody: any) => Promise<any>;
  LockUnLockUser: (data: any) => Promise<any>;
  ResetPassword: (data: any) => Promise<any>;
  LoginTMS: (data: any) => Promise<any>;
  Register: (data: any) => Promise<any>;
}

const AdministrationApi: IAdministrationApi = {
  GetAllDataCenter: () => {
    return BaseApi.GET('api/System/GetAllDataCenterInfo', Global.url_gta);
  },
  GetUserByCompany: (companyId: string | number) => {
    return BaseApi.GET(`Administration/GetUserByCompany?companyId=${companyId}`, Global.url_gta);
  },
  LoginTMS: (data: any) => {
    return BaseApi.POST('api/Auth/Login', data, Global.url_gta);
  },
  Register: (data: any) => {
    return BaseApi.POST('register', data, Global.url_gta, undefined, false);
  },

  // TMS
  GetAllUserTMS: (pageIndex: number, pageSize: number) => {
    return BaseApi.GET(`api/Auth/GetAllUsers?pageIndex=${pageIndex}&pageSize=${pageSize}`, Global.url_gta);
  },
  GetUserNameInfo: (username: any) => {
    return BaseApi.GET(`api/Auth/GetUserInfo?username=${username}`, Global.url_gta);
  },
  UpdateAccountTMS: (dataBody: any) => {
    return BaseApi.PUT('api/Auth/Update', dataBody, Global.url_gta);
  },
  CreateAccountTMS: (dataBody: any) => {
    return BaseApi.POST('api/Auth/Create', dataBody, Global.url_gta);
  },
  LockUnLockUser: (dataBody: any) => {
    return BaseApi.POST('api/Auth/LockUnlockUser', dataBody, Global.url_gta);
  },
  ResetPassword: (data: any) => {
    return BaseApi.POST('api/Auth/ResetPassword', data, Global.url_gta);
  }
};

export default AdministrationApi;
