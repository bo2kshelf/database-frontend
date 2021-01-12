import React from 'react';
import {SearchBooksPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';

export type ContainerProps = SearchBooksPageQuery;
export const Container: React.FC<ContainerProps> = ({
  searchBooks,
  ...props
}) => {
  return (
    <Component
      {...props}
      books={searchBooks.edges.map(
        ({node: {authors, relatedSeries, cover, ...rest}}) => ({
          ...rest,
          cover: cover || null,
          authors: authors.map(({author, roles}) => ({
            roles: roles || null,
            ...author,
          })),
          relatedSeries,
        }),
      )}
    />
  );
};
