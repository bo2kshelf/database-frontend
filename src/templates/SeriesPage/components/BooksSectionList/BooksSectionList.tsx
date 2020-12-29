import clsx from 'clsx';
import React from 'react';
import {
  BooksSectionListItem,
  BooksSectionListItemProps,
} from '../BooksSectionListItem';

export type ComponentProps = {
  className?: string;
  books: BooksSectionListItemProps['book'][];
};
export const Component: React.FC<ComponentProps> = ({className, books}) => (
  <div className={clsx(className, 'grid', 'grid-cols-10', 'gap-4')}>
    {books.map((book) => (
      <BooksSectionListItem
        key={book.id}
        book={book}
        className={clsx('h-52')}
      />
    ))}
  </div>
);

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
