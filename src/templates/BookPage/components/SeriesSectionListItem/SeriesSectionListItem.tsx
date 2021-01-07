import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import {
  BooksSectionList,
  BooksSectionListProps,
} from '~/templates/SeriesPage/components/BooksSectionList';

export type ComponentProps = {
  className?: string;
  title: string;
  seriesLink: string;
  books: BooksSectionListProps['books'];
  booksTotal: BooksSectionListProps['booksTotal'];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  books,
  seriesLink,
  booksTotal,
}) => (
  <div className={clsx(className)}>
    <h2 className={clsx('mb-4', 'text-xl', 'font-bold', 'select-all')}>
      <NextLink href={seriesLink}>
        <a>{title}</a>
      </NextLink>
    </h2>
    <BooksSectionList
      className={clsx('w-full')}
      books={books}
      booksTotal={booksTotal}
    />
  </div>
);

export type ContainerProps = {
  className?: string;
  series: {
    id: string;
    title: string;
    books: ComponentProps['books'];
    booksTotal: ComponentProps['booksTotal'];
  };
};
export const Container: React.FC<ContainerProps> = ({series, ...props}) => {
  return (
    <Component {...props} {...series} seriesLink={`/series/${series.id}`} />
  );
};
