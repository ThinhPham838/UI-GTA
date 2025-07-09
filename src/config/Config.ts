console.log('Enviroment', process.env.NODE_ENV);
const env = process.env.NODE_ENV;

const contactValues = process.env.PHONE_CONTACT_VALUES ? process.env.PHONE_CONTACT_VALUES.split(',') : [];
const contactKeys = process.env.PHONE_CONTACT_KEYS ? process.env.PHONE_CONTACT_KEYS.split(',') : [];

const contact: any[] = [];
contactValues.forEach((element, index) => {
  contact.push({
    text: contactKeys[index],
    value: element
  });
});

console.log('Contact', process.env.APP_NAME, contact, location.hostname);
const HName = location.hostname == 'localhost' ? 'localhost:8888' : location.hostname;
const Global = {
  name: process.env.APP_NAME ? process.env.APP_NAME : 'ui-gta',
  mode: env || 'development',
  url_gta: process.env.URL_TMS ? process.env.VITE_API_URL : 'http://localhost:8888/'
  // url_realtime: process.env.URL_REALTIME ? process.env.URL_REALTIME : 'https://realtimedata.adsun.vn/',
  // url_geocode: process.env.URL_GEOCODE ? process.env.URL_GEOCODE : 'https://geocode.adsun.vn/',
  // url_webRTC: process.env.URL_WEBRTC
  //     ? process.env.URL_WEBRTC
  //     : 'wss://6098b674e760d.streamlock.net/webrtc-session.json',
  // url_camera: process.env.URL_CAMERA ? process.env.URL_CAMERA : 'https://live1.adsun.vn:4430/',
  // // Url cho lấy tin tức
  // url_share: process.env.URL_SHARE ? process.env.URL_SHARE : 'https://shareapi.adsun.vn/',
  // url_store: process.env.URL_STORE ? process.env.URL_STORE : 'https://storage.adsun.vn/',
  // url_share1: process.env.URL_SHARE1 ? process.env.URL_SHARE1 : 'https://shareapi.adsun.vn/',
  // url_sharemap: process.env.URL_SHAREMAP ? process.env.URL_SHAREMAP : 'https://systemroute.adsun.vn/',
  // contact: contact,

  // url_pathName_Share_Realtime: process.env.URL_PATHNAME_SHARE
  //     ? process.env.URL_PATHNAME_SHARE
  //     : 'https://sharetrip.adsun.vn/chia-se-hanh-trinh-xe?adShare=',

  // url_pathName_Share_Livestream: process.env.URL_PATHNAME_SHARE_LIVE
  //     ? process.env.URL_PATHNAME_SHARE_LIVE
  //     : 'https://sharetrip.adsun.vn/chia-se-live-stream?adShare=',
  // url_pathName_Multiple_Share_Realtime: process.env.URL_PATHNAME_MULTIPLE_SHARE
  //     ? process.env.URL_PATHNAME_MULTIPLE_SHARE
  //     : 'https://sharetrip.adsun.vn/chia-se-hanh-trinh-nhieu-xe?adShare=',
  // host_name: HName,

  // url_pathName_Share_Static: process.env.URL_PATHNAME_SHARE_STATIC
  //     ? process.env.URL_PATHNAME_SHARE_STATIC
  //     : 'https://sharetrip.adsun.vn/chia-se-hanh-trinh-tinh?adShare='
};

export default Global;
