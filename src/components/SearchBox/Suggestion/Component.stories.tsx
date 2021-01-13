import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'SearchBox/Suggestion/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    href: {table: {disable: true}},
  },
} as Meta;

export const Book: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-72')} href="/books/1" />
);
Book.args = {
  type: 'Book',
  text: 'Webを支える技術',
  href: '/books/1',
};
Book.argTypes = {
  type: {table: {disable: true}},
};

export const Series: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-72')} href="/books/1" />
);
Series.args = {
  type: 'Series',
  text: 'チェンソーマン',
  href: '/series/1',
};
Series.argTypes = {
  type: {table: {disable: true}},
};

export const Author: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-72')} href="/books/1" />
);
Author.args = {
  type: 'Author',
  text: '藤本タツキ',
  href: '/authors/1',
};
Author.argTypes = {
  type: {table: {disable: true}},
};

export const Search: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-72')} />
);
Search.args = {
  type: 'Search',
  text: 'example',
  href: '/search?query=example',
};
Search.argTypes = {
  type: {table: {disable: true}},
};
