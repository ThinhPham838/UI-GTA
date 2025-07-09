import { createAction, createAsyncThunk, createSlice, PayloadAction, PrepareAction } from '@reduxjs/toolkit';
// import { IAccount, IRole } from '../../models/AccountRole';

// import AuthServiceApi from '../../apis/api/Auth';
import CryptoJs from 'crypto-js';
// import ROUTER_LIST, { IRouter, IRouterChild } from '../../routes/Routes';
import Cookies from 'js-cookie';
const encrypt = (content: any, password: string) => {
  return CryptoJs.AES.encrypt(JSON.stringify(content), password).toString();
};
const decrypt = (crypted: string, password: string) =>
  JSON.parse(CryptoJs.AES.decrypt(crypted, password).toString(CryptoJs.enc.Utf8)).content;

// Api
// import CompanyGroupServiceApi from '../../apis/api/CompanyGroup';
import { SECRET_KEY } from '../../global/Global';
// import { INotifiation } from '../../models/NewsAndNotification';
// import NewsAndNotificationApi from '../../apis/api/NewsAndNotification';

// import { ThemeType } from '@interfaces/interfaces';

// export const getRole = createAsyncThunk('user/GetRole', async (userName?: any) => {
//   try {
//     const response = await AuthServiceApi.GetRole(userName);
//     const dataEn = encrypt(response.data.data, SECRET_KEY);

//     localStorage.setItem('role', dataEn);
//     localStorage.setItem('roleDev', JSON.stringify(response.data.data));
//     sessionStorage.setItem('role', dataEn);
//     sessionStorage.setItem('roleDev', JSON.stringify(response.data.data));

//     return response.data.data;
//   } catch (error) {
//     throw new Error('');
//   }
// });

// export const getNotifyCompany = createAsyncThunk('user/getNotifyCompany', async () => {
//   // console.log('Run Async Thunk');
//   const response = await NewsAndNotificationApi.GetNotifyCompany();
//   return response.data;
// });

// const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light';

// export const defaultTheme = (localStorage.getItem('theme') as ThemeType) || preferredTheme;

// export const setTheme = createAction<PrepareAction<ThemeType>>('theme/setTheme', (theme: ThemeType) => {
//   localStorage.setItem('theme', theme); // có thao tác thì mới lưu theme! còn k thì cứ auto theo máy
//   return {
//     payload: theme
//   };
// });

export enum LanguageSelectType {
  VIETNAM = 'VIETNAM',
  ENGLISH = 'ENGLISH'
}

// Cài đặt table setting cho column
export type TTableColumnSetting = {
  tableName: string;
  columnHidden: Array<string>;
  columnSize: Array<string>;
  hiddenAuto?: boolean;
};

// Cài đặt table
export type TTableSetting = {
  userName?: string;
  fontSize: string;
  sizePage: number;
  fontStyle: string;
  stripe: boolean;
  autoSaveColumnHidden: boolean;
  autoSaveColumnWidth: boolean;
  resizingMode: string;
  tableColumnSetting: Array<TTableColumnSetting>;
};

// Mặc định table
export const initialSettingTable = {
  fontSize: '13px',
  sizePage: 100,
  fontStyle: 'normal',
  stripe: true,
  autoSaveColumnHidden: true,
  autoSaveColumnWidth: true,
  resizingMode: 'widget',
  tableColumnSetting: []
};

interface IExternalFeatures {
  isDisableAddPoint?: boolean; // Điểm (chuột phải, menu)
  isDisableAddArea?: boolean; // Vùng (chuột phải, menu)
  isTrip?: boolean; // Xem hành trình (menu nhỏ bảng, mở rộng realtime)
  isWatchImage?: boolean; // Xem hình ảnh (menu nhỏ, mở rộng bảng realtime)
  isWatchStream?: boolean; // Xem stream (menu nhỏ, mở rộng bảng realtime)
  isFuelView?: boolean; // Xem Nhiên liệu (check quyền use nào k cấp quyền thì k thấy được mức xăng)
  isWatchPlayBack?: boolean; // Xem playback (mở rộng bảng realtime)
  isWatchVideoStorage?: boolean; // Xem lưu trữ video (mở rộng bảng realtime)
  // BC Doanh nghiệp (Bảng mở rộng realtime)
  isItineraryReport?: boolean;
  isDetailItineraryReport?: boolean;
  isStopReport?: boolean;
  isGeneralSumaryRepport?: boolean;
  isVehicleTurnReport?: boolean;
  isLandMarkReport?: boolean;
  // QC31 (Bảng mở rộng realtime)
  isItineraryReportQC31?: boolean;
  isOverSpeedQC31?: boolean;
  isSpeedCarQC31?: boolean;
  isImageReportQC31?: boolean;
}
type initialStateType = {
  // Biến kiểm tra login thành công chưa
  userName?: string;
  isSuccessLogin: boolean;
  language: LanguageSelectType;
  // theme: ThemeType;
  tableSetting: TTableSetting;
  // roles: Array<IRole>;
  gotRole: boolean;
  // routeData: Array<IRouter>;
  // account: IAccount | undefined;

  isAccountTaxi?: boolean;
  openSettingTable?: boolean;
  externalFeatures?: IExternalFeatures;
  // isAccountHTX?: boolean;
  mainUrlDRect?: any;
  isNoUpdateInfo?: boolean;
  // notifyCompany?: INotifiation[];
  alertSystem?: any;

  //
  token?: string;
};

const initialState: initialStateType = {
  isSuccessLogin: false,
  language: LanguageSelectType.VIETNAM,
  // theme: defaultTheme,
  tableSetting: {
    fontSize: '13px',
    sizePage: 100,
    fontStyle: 'normal',
    stripe: true,
    autoSaveColumnHidden: true,
    autoSaveColumnWidth: true,
    resizingMode: 'widget',
    tableColumnSetting: []
  },
  gotRole: false,
  // roles: [],
  // routeData: [],
  // account: undefined,
  isAccountTaxi: undefined,
  openSettingTable: false,
  externalFeatures: undefined,
  // isAccountHTX: undefined,
  isNoUpdateInfo: undefined,
  // notifyCompany: undefined,
  alertSystem: undefined,

  //
  token: Cookies.get('token')
};

// const handleCallBackCheckAccess = (name: string, roles: Array<IRole>) => {
//   const indexSearchRole = roles.findIndex((item: IRole) => item.Name === name);
//   if (indexSearchRole != -1) {
//     return true;
//   }
//   if (name.split(',') !== undefined && name.split(',').length > 1) {
//     for (let i = 0; i < name.split(',').length; i++) {
//       const index = roles.findIndex((item: IRole) => item.Name === name.split(',')[i]);
//       if (index != -1) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// const checkAcceptRoleTag = (roleTag: string, Roles: any[]) => {
//   // console.log('check role', Roles, roleTag);
//   return !Roles || Roles.includes(roleTag);
// };

// const handleCallBackCheckAccess = (name: string, roles: string): boolean => {
//   if (!name || !roles) return false;

//   const requiredRoles = name.split(',').map(role => role.trim());
//   const userRoles = roles.split(',').map(role => role.trim());

//   return requiredRoles.some(role => userRoles.includes(role));
// };

// const filterRouteRecursive = (routes: Array<any>, roles: string, isFullAccess: boolean): Array<any> => {
//   return routes
//     .map(route => {
//       // Nếu có child => xử lý đệ quy
//       let filteredChildren = undefined;
//       console.log({ route });

//       if (route.child && Array.isArray(route.child)) {
//         filteredChildren = filterRouteRecursive(route.child, roles, isFullAccess);
//       }

//       // Nếu full quyền thì giữ tất cả
//       if (isFullAccess) {
//         return { ...route, child: filteredChildren };
//       }

//       // Nếu không check quyền thì luôn hiển thị
//       if (route.noCheckAccess) {
//         return { ...route, child: filteredChildren };
//       }

//       // Kiểm tra quyền tại chính node này
//       const hasAccess = route.name ? handleCallBackCheckAccess(route.name, roles) : false;

//       // Nếu có con => giữ lại nếu có ít nhất 1 con hợp lệ
//       if (filteredChildren && filteredChildren.length > 0) {
//         return { ...route, child: filteredChildren };
//       }

//       // Nếu không có con => giữ nếu có quyền
//       if (hasAccess) {
//         return { ...route, access: 1 };
//       }

//       // Không có quyền và không có con hợp lệ => loại bỏ
//       return null;
//     })
//     .filter(Boolean); // loại bỏ null
// };

const checkAcceptRoleTag = (roleTag: string, Roles: any[]) => {
  return !Roles || Roles.includes(roleTag);
};

const checkAccessFromRoleAccepts = (roleAccepts: string[] | undefined, userRoles: string[]): boolean => {
  if (!roleAccepts || roleAccepts.length === 0) return false;
  return roleAccepts.some(role => checkAcceptRoleTag(role, userRoles));
};

const filterRouteRecursive = (routes: Array<any>, roles: string, isFullAccess: boolean): Array<any> => {
  const userRoles = roles.split(',').map(r => r.trim());

  return routes
    .map(route => {
      let filteredChildren = undefined;

      if (Array.isArray(route.child)) {
        filteredChildren = filterRouteRecursive(route.child, roles, isFullAccess);
      }

      if (isFullAccess) {
        return { ...route, child: filteredChildren };
      }

      if (route.noCheckAccess) {
        return { ...route, child: filteredChildren };
      }

      // 👉 Kiểm tra quyền dựa vào RoleAccepts
      const hasAccess = checkAccessFromRoleAccepts(route.RoleAccepts, userRoles);

      // Có con hợp lệ => giữ lại route và con
      if (filteredChildren && filteredChildren.length > 0) {
        return { ...route, child: filteredChildren };
      }

      // Không có con => chỉ giữ nếu có quyền
      if (hasAccess) {
        return { ...route, access: 1 };
      }

      // Không quyền và không có con => loại bỏ
      return null;
    })
    .filter(Boolean);
};

// const handleFilterRouteCanAccess = (
//   // isHTXAcc?: boolean,
//   levelAcc?: number | undefined,
//   roles?: Array<IRole>,
//   routeData?: Array<IRouter>
// ) => {
//   const result: Array<IRouter> = [];

//   // console.log('levelAcc', levelAcc !== undefined && levelAcc * 1 == 0, levelAcc, roles, routeData);
//   // đây là dành cho accFull quyền
//   if (levelAcc !== undefined && Number(levelAcc) >= 1) {
//     routeData?.forEach(routeItem => {
//       if (routeItem.child != undefined && routeItem.name != 'htxmanager') {
//         const newChildRouteArray: Array<IRouterChild> = routeItem.child.filter(childRouteItem => {
//           return true;
//         });

//         result.push({ ...routeItem, child: newChildRouteArray });
//       } else {
//         if (routeItem.noCheckAccess === true && routeItem.name != 'htxmanager') {
//           result.push({ ...routeItem });
//         } else if (routeItem.name && routeItem.name != 'htxmanager') {
//           result.push({ ...routeItem, access: 0 });
//         }
//       }
//     });
//     // console.log('result', result, isHTXAcc);
//     return result;
//   }
//   if (roles?.length !== 0) {
//     // Xử lý phân quyền cấp 2
//     routeData?.forEach(routeItem => {
//       if (routeItem.child != undefined) {
//         const newChildRouteArray: Array<IRouterChild> = routeItem.child.filter(childRouteItem => {
//           if (childRouteItem.noCheckAccess === true) {
//             return true;
//           }
//           if (handleCallBackCheckAccess(childRouteItem.name ? childRouteItem.name : 'notacsssscess', roles!)) {
//             return true;
//           }
//           return false;
//         });
//         // console.log('Routedata2 test', newChildRouteArray);

//         result.push({ ...routeItem, child: newChildRouteArray });
//       } else {
//         if (routeItem.noCheckAccess === true) {
//           result.push({ ...routeItem });
//         } else if (routeItem.name) {
//           result.push({ ...routeItem, access: handleCallBackCheckAccess(routeItem.name!, roles!) ? 1 : 0 });
//         }
//       }
//     });
//     // Xử lý phân quyền cấp 1 (Quyền cha cố định)
//     // Sau khi phân cấp quyền 2 xong (những quyền nào có child === undefine và lenght > 0)
//     // thì giữ lại => lenght === 0 thì bỏ đi để tránh dư thừa
//     const result1 = result.filter(item => {
//       // console.log('item role', item, isHTXAcc);
//       // tài khoản bình thường k có quyền quản lý HTX thì k đc phép xem các trang HTX vì có thể gây hại server do gọi quá nhiều trang 1 lúc
//       // if (item.name === 'htxmanager' && isHTXAcc) {
//       //   return false;
//       // }
//       if (item.child !== undefined) {
//         if (item.child.length > 0) {
//           return true;
//         }
//       } else {
//         return true;
//       }
//       return false;
//     });
//     // Xử lý phân quyền cấp 3 (Quyền con bậc thấp nhất hiện tại, nếu có thấp hơn thì phân quyền tiếp)
//     // Tạo 1 biến active đối với bậc (chỉ dùng đối với bậc này) này nếu có thì active = true
//     for (let i = 0; i < result1.length; i++) {
//       const child2 = result1[i].child;
//       if (child2 !== undefined && child2.length > 0) {
//         for (let j = 0; j < child2.length; j++) {
//           const child3 = child2[j].child;
//           if (child3 !== undefined && child3.length > 0) {
//             for (let k = 0; k < child3.length; k++) {
//               if (child3[k] && child3[k].name !== undefined) {
//                 if (handleCallBackCheckAccess(child3[k].name ? child3[k].name! : 'notacsssscess', roles!)) {
//                   if (child3[k].active == undefined || child3[k].active != true)
//                     try {
//                       child3[k]['active'] = true;
//                     } catch (error) {
//                       // console.log('err true', error);
//                     }
//                 } else {
//                   try {
//                     child3[k]['active'] = false;
//                   } catch (error) {
//                     // console.log('err false', error, child3[k], child3[k].name, roles);
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }

//     // Lọc kết quả cuối cùng
//     return result1;
//   }
//   return [];
// };

// get main url đối với route map ..

// Dùng cho những tài khoản cấp quyền từ maxLevel trở lên
// có check , phân quyền đôi

const userSlide = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    // forceResetLogin: state => {
    //   console.log('forceResetLogin');
    //   state.tableSetting = initialState.tableSetting;
    //   localStorage.removeItem(state.account?.Username! + '/TableSetting');
    // },
    // OM
    updateToken: (state, action: PayloadAction<any>) => {
      state.token = action.payload;
    },
    //
    resetSettingTable: (state, action: PayloadAction<boolean | undefined>) => {
      if (action.payload) {
        state.tableSetting = initialState.tableSetting;
      } else {
        const tableSetting = {
          fontSize: '13px',
          sizePage: 50,
          fontStyle: 'normal',
          stripe: true,
          autoSaveColumnHidden: true,
          autoSaveColumnWidth: true,
          resizingMode: 'widget',
          tableColumnSetting: state.tableSetting.tableColumnSetting
        };
        state.tableSetting = tableSetting;
      }
    },

    updateTableSetting: (state, action: PayloadAction<any>) => {
      const tableSetting = {
        fontSize: action.payload.fontSize,
        sizePage: action.payload.sizePage,
        fontStyle: action.payload.fontStyle,
        stripe: action.payload.stripe,
        autoSaveColumnHidden: action.payload.autoSaveColumnHidden,
        autoSaveColumnWidth: action.payload.autoSaveColumnWidth,
        resizingMode: action.payload.resizingMode,
        tableColumnSetting: state.tableSetting.tableColumnSetting
      };
      state.tableSetting = tableSetting;
    },
    updateSuccessLogin: (state, action: PayloadAction<boolean>) => {
      state.isSuccessLogin = action.payload;
    },
    updateLanguage: (state, action: PayloadAction<LanguageSelectType>) => {
      state.language = action.payload;
    },

    // Xử lý với dữ liệu từ localstorage chuyển thẳng vào ko cần gọi api
    // Cập nhật cài đặt style bảng sau khi đăng nhập thành công
    updateTableSettingLogin: (state, action: PayloadAction<TTableSetting>) => {
      if (!action.payload) {
        // console.log("initialState.tableSetting", action.payload)
        state.tableSetting = initialState.tableSetting;
      }
      if (state.tableSetting && action.payload) {
        // console.log("updateTableSettingLogin", action.payload)
        state.tableSetting = action.payload;
      }
    },
    // Cập nhật cài đặt style cho bảng
    updateUserSetting: (
      state,
      action: PayloadAction<{ fontSize: string; sizePage: number; fontStyle: string; stripe: boolean }>
    ) => {
      if (state.tableSetting) {
        (state.tableSetting.fontSize = action.payload.fontSize),
          (state.tableSetting.fontStyle = action.payload.fontStyle),
          (state.tableSetting.sizePage = action.payload.sizePage),
          (state.tableSetting.stripe = action.payload.stripe);
      }
    },
    // Cập nhật cột ẩn và cả kích thước cột
    updateColumnSetting: (state, action: PayloadAction<TTableColumnSetting>) => {
      // reset tableColumnSetting list saved
      // state.tableSetting.tableColumnSetting = []
      const indexSetting = state.tableSetting.tableColumnSetting.findIndex(
        item => item.tableName === action.payload.tableName
      );

      console.log(action.payload.columnSize, action.payload.columnHidden);
      if (indexSetting == -1 && (action.payload.columnHidden.length != 0 || action.payload.columnSize.length != 0)) {
        // console.log('add new');
        state.tableSetting.tableColumnSetting.push(action.payload);
      } else if (action.payload.columnHidden.length == 0 && action.payload.columnSize.length == 0) {
        // console.log('del exist null');
        state.tableSetting.tableColumnSetting.splice(indexSetting, 1);
      } else if (action.payload.columnHidden.length != 0 || action.payload.columnSize.length != 0) {
        // console.log('add exist');
        state.tableSetting.tableColumnSetting = state.tableSetting.tableColumnSetting.map(
          (item: TTableColumnSetting) => {
            if (item.tableName !== action.payload.tableName) {
              return item;
            } else return action.payload;
          }
        );
      }
    },
    updateAutoSaveColumnHidden: (state, action: PayloadAction<{ autoSaveColumnHidden: boolean }>) => {
      if (state.tableSetting) {
        state.tableSetting.autoSaveColumnHidden = action.payload.autoSaveColumnHidden;
      }
    },
    updateOpeSettingTable: (state, action: PayloadAction<boolean>) => {
      state.openSettingTable = action.payload;
    },

    updateAlertSystem: (state, action: PayloadAction<any>) => {
      state.alertSystem = action.payload;
    }
  },
  extraReducers: builder => {
    // builder.addCase(getNotifyCompany.fulfilled, (state, action) => {
    //   const response = action.payload;
    //   // console.log('response getNotifyCompany', response, state.notifyCompany);
    //   state.notifyCompany = response.ThongBaos;
    // });
  }
});

// Action
export const {
  updateAlertSystem,
  resetSettingTable,
  updateTableSetting,
  updateTableSettingLogin,
  updateAutoSaveColumnHidden,
  updateUserSetting,
  updateColumnSetting,
  updateSuccessLogin,
  updateLanguage,
  updateOpeSettingTable,

  // OM
  updateToken
} = userSlide.actions;

export default userSlide.reducer;
