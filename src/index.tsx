import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store from './app/store';
import theme from './styles/theme';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

// LANGUAGE
// import './i18n/index';
// CSS
import GlobalStyles from './styles/Global';
import App from './App';
import Loading from '@components/common/Loading';
// import { QueryClientProvider } from 'react-query';
// import queryClient from './lib/queryClient';

const persistor = persistStore(store);

const container = document.getElementById('root');
const root = createRoot(container!);

// off all log console when production
// if (process.env.NODE_ENV === 'production') {
//   console.log = () => {
//     //
//   };
//   console.debug = () => {
//     //
//   };
// }

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <QueryClientProvider client={queryClient()}> */}
      <ThemeProvider theme={theme}>
        <ConfigProvider locale={enUS}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <BrowserRouter>
              <GlobalStyles />
              <App />
            </BrowserRouter>
          </PersistGate>
        </ConfigProvider>
      </ThemeProvider>
      {/* </QueryClientProvider> */}
    </Provider>
  </React.StrictMode>
);
