/* eslint-disable no-process-env */
import clsx from 'clsx';
import {AppProps} from 'next/app';
import React from 'react';
import 'tailwindcss/tailwind.css';
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
        <div className={clsx('container', 'mx-auto', 'pt-12')}>
          <PageComponent {...pageProps} />
        </div>
      </ConfiguratedI18nextProvider>
    </ConfiguredApolloProvider>
  );
};

export default App;
