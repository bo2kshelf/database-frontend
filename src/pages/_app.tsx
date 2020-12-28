import {AppProps} from 'next/app';
import React from 'react';
import 'tailwindcss/tailwind.css';
import '~/styles/index.css';

export const App: React.FC<AppProps> = ({
  Component: PageComponent,
  pageProps,
}) => {
  return <PageComponent {...pageProps} />;
};

export default App;
