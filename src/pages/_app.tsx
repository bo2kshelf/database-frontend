/* eslint-disable no-process-env */
import clsx from 'clsx';
import {AppProps} from 'next/app';
import React from 'react';
import 'tailwindcss/tailwind.css';
import {HeaderNav} from '~/components/HeaderNav';
import {ConfiguratedI18nextProvider} from '~/i18n';
import {ConfiguredApolloProvider} from '~/lib/apollo-provider';
import '~/styles/index.css';

export const App: React.FC<AppProps> = ({
  Component: PageComponent,
  pageProps,
}) => {
  return (
    <ConfiguredApolloProvider apiEndpoint={process.env.GRAPHQL_API_ENDPOINT!}>
      <ConfiguratedI18nextProvider>
        <HeaderNav
          className={clsx('sticky', 'top-0', 'left-0', 'w-full', 'z-50')}
        />
        <div className={clsx('container', 'mx-auto', 'pt-12')}>
          <PageComponent {...pageProps} />
        </div>
      </ConfiguratedI18nextProvider>
    </ConfiguredApolloProvider>
  );
};

export default App;
