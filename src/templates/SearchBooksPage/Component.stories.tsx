import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {placeholder} from '~~/.storybook/assets';
import {viewportsKeys} from '~~/.storybook/tailwind/viewports';
import {Component, ComponentProps} from './Component';

export default {
  title: 'Page/SearchBooks/Component',
  component: Component,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: viewportsKeys[viewportsKeys.length - 1],
    },
  },
  argTypes: {
    className: {table: {disable: true}},
    books: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full')} />
);
Primary.args = {
  books: [...new Array(9)].map((_, i) => ({
    id: `${i + 1}`,
    title: `Book ${i + 1}`,
    cover: placeholder['210x297'],
    authors: [{id: '1', name: 'Author 1', roles: null}],
    relatedSeries: [{id: '1', title: 'Series 1'}],
  })),
};
