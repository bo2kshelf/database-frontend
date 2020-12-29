import clsx from 'clsx';
import React from 'react';
import {
  BookHeader,
  BookHeaderProps,
} from '~/templates/BookPage/components/BookHeader';
import {BookPageQuery} from '~/_generated/graphql-request';

export type ComponentProps = {
  className?: string;
  title: BookHeaderProps['title'];
  cover: BookHeaderProps['cover'];
  authors: BookHeaderProps['authors'];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  cover,
  authors,
}) => (
  <main className={clsx(className)}>
    <BookHeader title={title} cover={cover} authors={authors} />
  </main>
);

export type ContainerProps = BookPageQuery;
export const Container: React.FC<ContainerProps> = ({book, ...props}) => {
  return (
    <Component
      {...props}
      {...book}
      cover={book?.cover || null}
      authors={book.authors.map(({roles, author}) => ({
        roles: roles || undefined,
        ...author,
      }))}
    />
  );
};
