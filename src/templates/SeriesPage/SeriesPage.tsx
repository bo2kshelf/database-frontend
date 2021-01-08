import clsx from 'clsx';
import NextHead from 'next/head';
import React from 'react';
import {useTranslation} from 'react-i18next';
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
  children,
  title,
  books,
  booksTotal,
  relatedBooks,
  relatedBooksTotal,
}) => (
  <main className={clsx(className)}>
    {children}
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
  const {t} = useTranslation();

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
    >
      <NextHead>
        <title>{t('head:series_page', {title: series.title})}</title>
      </NextHead>
    </Component>
  );
};
