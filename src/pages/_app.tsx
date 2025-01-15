import GlobalLayout from '@/components/GlobalLayout';
import store, { persistor } from '@/redux/store';
import '@/styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout;
}) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
      </PersistGate>
    </Provider>
  );
}
