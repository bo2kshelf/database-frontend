import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'SearchBox/InputBox/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const Book: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-72')} />
);
