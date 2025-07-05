class EnvStore {
  pageSize = 40;
  apiBaseUrl = process.env.REACT_APP_API_ROOT || 'https://svom.adsun.vn/';
  url_auth = process.env.REACT_APP_URL_AUTH || 'https://svom.adsun.vn/';
  url_report = process.env.REACT_APP_URL_REPORT || 'https://svom.adsun.vn/';

  get isEnvDev(): boolean {
    return process.env.NODE_ENV === 'development';
  }

  get appBaseName(): string {
    return process.env.REACT_APP_BASENAME || '';
  }

  get publicUrl(): string {
    return process.env.REACT_APP_PUBLIC_URL || `${window.location.protocol}//${window.location.host}`;
  }

  get appUrl(): string {
    return `${window.location.protocol}//${window.location.host}${this.appBaseName}`;
  }

  get canUseDOM(): boolean {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  }

  get hostName(): string {
    return window.location.hostname == 'localhost' ? 'localhost:3000' : window.location.hostname;
  }

  get nameweb(): string {
    return process.env.REACT_APP_APP_NAME ? process.env.REACT_APP_APP_NAME : 'anhduongom';
  }

  get mode(): string {
    return process.env.NODE_ENV || 'development';
  }
}

export const envStore = new EnvStore();

export const endpoints = {
  apiBaseUrl: envStore.apiBaseUrl,
  url_auth: envStore.url_auth,
  url_report: envStore.url_report
};

export const { publicUrl, appUrl } = envStore;

export default envStore;
