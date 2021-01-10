import {
  faBook,
  faLayerGroup,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from '.';
import {icons} from './Container';

export default {
  title: 'SearchBox/SuggestionIcon/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    icon: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps & {type: keyof typeof icons}> = ({
  type,
  ...args
}) => <Component {...args} className={clsx('text-md')} icon={icons[type]} />;
Primary.args = {
  type: Object.keys(icons)[0] as keyof typeof icons,
};
Primary.argTypes = {
  type: {
    control: {
      type: 'radio',
      options: Object.keys(icons),
    },
  },
};

export const Book: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('text-md')} icon={faBook} />
);

export const Series: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('text-md')} icon={faLayerGroup} />
);

export const Author: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('text-md')} icon={faUserEdit} />
);
