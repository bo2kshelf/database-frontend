import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {placeholder} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'Page/SearchBooks/BookColumn/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    cover: {table: {disable: true}},
    authors: {table: {disable: true}},
    relatedSeries: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <div className={clsx('w-full')}>
    <Component {...args} className={clsx('w-1/3', 'h-28')} />
  </div>
);
Primary.args = {
  id: '1',
  title: 'よふかしのうた(6)',
  cover: placeholder['210x297'],
  authors: [{id: '5ff7f0f040011f30f976ec21', name: 'コトヤマ', roles: null}],
  relatedSeries: [{id: '5ff7f1be40011f397a76ec28', title: 'よふかしのうた'}],
};

export const NoCover: Story<ComponentProps> = (args) => (
  <div className={clsx('w-full')}>
    <Component {...args} className={clsx('w-1/3', 'h-28')} />
  </div>
);
NoCover.storyName = '書影が無い';
NoCover.args = {
  id: '1',
  title: 'よふかしのうた(6)',
  cover: null,
  authors: [{id: '5ff7f0f040011f30f976ec21', name: 'コトヤマ', roles: null}],
  relatedSeries: [{id: '5ff7f1be40011f397a76ec28', title: 'よふかしのうた'}],
};
