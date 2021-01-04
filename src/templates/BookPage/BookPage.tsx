import clsx from 'clsx';
import React from 'react';
import {
  BookHeader,
  BookHeaderProps,
} from '~/templates/BookPage/components/BookHeader';
import {BookPageQuery} from '~/_generated/graphql-request';
import {SeriesSection, SeriesSectionProps} from './components/SeriesSection';

export type ComponentProps = {
  className?: string;
  title: BookHeaderProps['title'];
  cover: BookHeaderProps['cover'];
  authors: BookHeaderProps['authors'];
  series: SeriesSectionProps['series'];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  cover,
  authors,
  series,
}) => (
  <main className={clsx(className)}>
    <BookHeader title={title} cover={cover} authors={authors} />
    <SeriesSection className={clsx('mt-8')} series={series} />
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
      series={book.relatedSeries.map(({books, ...rest}) => ({
        ...rest,
        books: books.edges.map(({node: {book}}) => ({
          ...book,
          cover: book.cover || null,
        })),
      }))}
    />
  );
};
