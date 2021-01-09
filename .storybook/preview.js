import React from 'react';

import 'tailwindcss/tailwind.css';
import {I18nextProvider, initReactI18next} from 'react-i18next';

import {RouterContext} from 'next/dist/next-server/lib/router-context';

import i18n from 'i18next';
import {resources} from '../src/i18n';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'ja',
    toolbar: {
      icon: 'globe',
      items: [{value: 'ja', right: '🇯🇵', title: '日本語'}],
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'ja-JP',
  debug: false,
});

export const decorators = [
  (Story, {globals}) => {
    i18n.language = globals.locale;
    return (
      <RouterContext.Provider
        value={{
          push: () => Promise.resolve(),
          replace: () => Promise.resolve(),
          prefetch: () => Promise.resolve(),
        }}
      >
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </RouterContext.Provider>
    );
  },
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
};
