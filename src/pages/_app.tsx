import clsx from 'clsx';
import {AppProps} from 'next/app';
import React from 'react';
import 'tailwindcss/tailwind.css';
import {ConfiguratedI18nextProvider} from '~/i18n';
import '~/styles/index.css';

export const App: React.FC<AppProps> = ({
  Component: PageComponent,
  pageProps,
}) => {
  return (
    <ConfiguratedI18nextProvider>
      <div className={clsx('container', 'mx-auto', 'pt-12')}>
        <PageComponent {...pageProps} />
      </div>
    </ConfiguratedI18nextProvider>
  );
};

export default App;
