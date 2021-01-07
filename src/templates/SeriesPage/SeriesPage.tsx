import clsx from 'clsx';
import React from 'react';
import {SeriesPageQuery} from '~/_generated/graphql-request';
import {BooksSection, BooksSectionProps} from './components/BooksSection';
import {RelatedBookSection} from './components/RelatedBooksSection';
import {SeriesHeader, SeriesHeaderProps} from './components/SeriesHeader';

export type ComponentProps = {
  className?: string;
  title: SeriesHeaderProps['title'];
  books: BooksSectionProps['books'];
  booksTotal: BooksSectionProps['booksTotal'];
  relatedBooks: BooksSectionProps['books'];
  relatedBooksTotal: BooksSectionProps['booksTotal'];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  books,
  booksTotal,
  relatedBooks,
  relatedBooksTotal,
}) => (
  <main className={clsx(className)}>
    <SeriesHeader title={title} />
    {booksTotal > 0 && (
      <BooksSection
        className={clsx('mt-8')}
        books={books}
        booksTotal={booksTotal}
      />
    )}
    {relatedBooksTotal > 0 && (
      <RelatedBookSection
        className={clsx('mt-8')}
        books={relatedBooks}
        booksTotal={relatedBooksTotal}
      />
    )}
  </main>
);

export type ContainerProps = SeriesPageQuery;
export const Container: React.FC<ContainerProps> = ({series, ...props}) => {
  return (
    <Component
      {...props}
      {...series}
      books={series.books.edges.map(({node: {book}}) => ({
        ...book,
        cover: book.cover || null,
      }))}
      booksTotal={series.books.aggregate.count}
      relatedBooks={series.relatedBooks.edges.map(({node: {book}}) => ({
        ...book,
        cover: book.cover || null,
      }))}
      relatedBooksTotal={series.relatedBooks.aggregate.count}
    />
  );
};
