import clsx from 'clsx';
import React from 'react';
import {AuthorPageQuery} from '~/_generated/graphql-request';
import {
  SeriesSection,
  SeriesSectionProps,
} from '../BookPage/components/SeriesSection';
import {BooksSection, BooksSectionProps} from './components/BooksSection';

export type ComponentProps = {
  className?: string;
  name: string;
  books: BooksSectionProps['books'];
  booksTotal: BooksSectionProps['booksTotal'];
  series: SeriesSectionProps['series'];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  name,
  books,
  booksTotal,
  series,
}) => (
  <main className={clsx(className)}>
    <h1 className={clsx('mb-2', 'text-2xl', 'font-bold', 'select-all')}>
      {name}
    </h1>
    <BooksSection
      className={clsx('mt-8')}
      books={books}
      booksTotal={booksTotal}
    />
    <SeriesSection className={clsx('mt-8')} series={series} />
  </main>
);

export type ContainerProps = AuthorPageQuery;
export const Container: React.FC<ContainerProps> = ({
  author,

  ...props
}) => {
  return (
    <Component
      {...props}
      {...author}
      books={author.books.edges.map(({node: {cover, ...rest}}) => ({
        ...rest,
        cover: cover || null,
      }))}
      booksTotal={author.books.aggregate.count}
      series={author.relatedSeries.edges.map(({node: {books, ...rest}}) => ({
        ...rest,
        booksTotal: books.aggregate.count,
        books: books.edges.map(({node: {book}}) => ({
          ...book,
          cover: book.cover || null,
        })),
      }))}
    />
  );
};