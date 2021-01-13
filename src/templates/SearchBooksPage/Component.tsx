import clsx from 'clsx';
import React from 'react';
import {BookColumn, BookColumnProps} from './BookColumn';
import {QueryDisplay, QueryDisplayProps} from './QueryDisplay';

export type ComponentProps = {
  className?: string;
  query: {
    title: string;
  };
  aggregate: QueryDisplayProps['aggregate'];
  books: BookColumnProps['book'][];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  books,
  aggregate,
  query,
}) => (
  <main className={clsx(className)}>
    {children}
    <QueryDisplay
      query={query}
      className={clsx('mb-6')}
      aggregate={aggregate}
    />
    <div
      className={clsx(
        'grid',
        'grid-cols-1',
        'lg:grid-cols-2',
        'xl:grid-cols-3',
        'gap-x-6',
        'gap-y-6',
      )}
    >
      {books.map((book) => (
        <BookColumn
          key={book.id}
          className={clsx('h-28', 'lg:h-40')}
          book={book}
        />
      ))}
    </div>
  </main>
);
