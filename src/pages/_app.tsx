import clsx from 'clsx';
import {AppProps} from 'next/app';
import React from 'react';
import 'tailwindcss/tailwind.css';
import '~/styles/index.css';

export const App: React.FC<AppProps> = ({
  Component: PageComponent,
  pageProps,
}) => {
  return (
    <div className={clsx('container', 'mx-auto', 'pt-12')}>
      <PageComponent {...pageProps} />
    </div>
  );
};

export default App;
