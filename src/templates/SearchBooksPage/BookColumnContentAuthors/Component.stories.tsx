import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'Page/SearchBooks/BookColumnContentAuthors/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    authors: {table: {disable: true}},
  },
} as Meta;

export const MultipleRolesAndAuthors: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-64')} />
);
MultipleRolesAndAuthors.storyName = '複数のAuthor';
MultipleRolesAndAuthors.args = {
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
};
