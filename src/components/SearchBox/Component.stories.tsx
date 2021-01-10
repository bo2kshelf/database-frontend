import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'SearchBox/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    data: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-72')} />
);
Primary.args = {
  query: '油絵ネス湖の怪物はあなたを信じる',
  loading: false,
  active: true,
  data: [
    {id: '1', type: 'Book', title: 'Book 1'},
    {id: '2', type: 'Book', title: 'Book 2'},
    {id: '3', type: 'Book', title: 'Book 3'},
    {id: '4', type: 'Author', name: 'Author 1'},
    {id: '5', type: 'Author', name: 'Author 2'},
    {id: '6', type: 'Series', title: 'Series 1'},
    {id: '7', type: 'Series', title: 'Sereis 2'},
  ],
};
Primary.storyName = '検索結果がある場合';
Primary.argTypes = {
  query: {table: {disable: true}},
  loading: {table: {disable: true}},
  active: {table: {disable: true}},
};

export const NoResult: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-72')} />
);
NoResult.storyName = '検索結果が何もない場合';
NoResult.args = {
  query: '油絵ネス湖の怪物はあなたを信じる',
  loading: false,
  active: true,
  data: [],
};
NoResult.argTypes = {
  loading: {table: {disable: true}},
  active: {table: {disable: true}},
};
