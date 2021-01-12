import clsx from 'clsx';
import React from 'react';
import {BookColumn, BookColumnProps} from './BookColumn';

export type ComponentProps = {
  className?: string;
  books: BookColumnProps['book'][];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  books,
}) => (
  <main className={clsx(className)}>
    {children}
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
