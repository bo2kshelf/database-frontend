import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'Page/SearchBooks/BookColumnContent/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    cover: {table: {disable: true}},
    authors: {table: {disable: true}},
    relatedSeries: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-64', 'h-28')} />
);
Primary.args = {
  link: 'books/1',
  title: 'よふかしのうた(6)',
  authors: [{id: '5ff7f0f040011f30f976ec21', name: 'コトヤマ', roles: null}],
  relatedSeries: [{id: '5ff7f1be40011f397a76ec28', title: 'よふかしのうた'}],
};

export const MultipleRolesAndAuthors: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-64', 'h-28')} />
);
MultipleRolesAndAuthors.storyName = '複数のAuthor';
MultipleRolesAndAuthors.args = {
  link: 'books/1',
  title: '裏世界ピクニック(1)',
  authors: [
    {
      id: '1',
      name: 'shirakaba',
      roles: ['キャラクター原案'],
    },
    {
      id: '2',
      name: '宮澤伊織',
      roles: ['原作'],
    },
    {
      id: '3',
      name: '水野英多',
      roles: ['作画'],
    },
  ],
  relatedSeries: [
    {
      id: '1',
      title: '裏世界ピクニック',
    },
  ],
};
