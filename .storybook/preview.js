import React from 'react';
import 'tailwindcss/tailwind.css';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import {withNextRouter} from 'storybook-addon-next-router';
import i18n from 'i18next';
import {addDecorator} from '@storybook/react';
import {resources} from '../src/i18n';
import './replaceNextImage';
import {viewports as tailwindViewports} from './tailwind/viewports';

addDecorator(withNextRouter());

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
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    );
  },
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  storySort: {
    method: 'alphabetical',
    order: ['Component', 'Container'],
  },
  viewport: {
    viewports: {
      ...tailwindViewports,
    },
  },
};
