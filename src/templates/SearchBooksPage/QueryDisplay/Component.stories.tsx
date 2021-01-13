import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'Page/SearchBooks/QueryDisplay/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <div className={clsx('w-full')}>
    <Component {...args} className={clsx('w-1/3', 'h-28')} />
  </div>
);
Primary.args = {
  query: {
    title: 'Example',
  },
  i18n: {
    result: '次の検索結果は8件該当しました．',
  },
};
