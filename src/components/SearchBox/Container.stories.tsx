import {ApolloProvider} from '@apollo/client';
import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import {createMockClient} from 'mock-apollo-client';
import React from 'react';
import {SearchBoxDocument} from '~/_generated/apollo';
import {Container, ContainerProps} from './Container';

export default {
  title: 'SearchBox/Container',
  component: Container,
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ContainerProps> = (args) => (
  <Container {...args} className={clsx('w-72')} />
);
Primary.storyName = '検索結果がある場合';
Primary.decorators = [
  (Story) => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(SearchBoxDocument, ({query}) =>
      Promise.resolve({
        data: {
          searchMixed: {
            aggregate: {count: 10},
            pageInfo: {startCursor: 'startCursor'},
            edges: [
              {node: {__typename: 'Book', id: '1', title: `${query} 1`}},
              {node: {__typename: 'Series', id: '2', title: `${query} 1`}},
              {node: {__typename: 'Author', id: '3', name: `${query} 1`}},
            ],
          },
        },
      }),
    );
    return (
      <ApolloProvider client={mockClient}>
        <Story />
      </ApolloProvider>
    );
  },
];

export const Sc: Story<ContainerProps> = (args) => (
  <Container {...args} className={clsx('w-72')} />
);
Sc.storyName = '検索結果が何もない場合';
Sc.decorators = [
  (Story) => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(SearchBoxDocument, ({query}) =>
      Promise.resolve({
        data: {
          searchMixed: {
            aggregate: {count: 0},
            pageInfo: {startCursor: 'startCursor'},
            edges: [],
          },
        },
      }),
    );
    return (
      <ApolloProvider client={mockClient}>
        <Story />
      </ApolloProvider>
    );
  },
];
