import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'SearchBox/SuggestionNoResult/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-72')} />
);
Primary.args = {
  query: '油絵ネス湖の怪物はあなたを信じる',
};
