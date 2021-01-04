import clsx from 'clsx';
import React from 'react';
import {BooksSectionList, BooksSectionListProps} from '../BooksSectionList';

export type ComponentProps = {
  className?: string;
  books: BooksSectionListProps['books'];
  i18n: {
    title: string;
    aggregate: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
  className,
  books,
  i18n,
}) => (
  <div className={clsx(className)}>
    <h1 className={clsx('mb-2', 'text-xl', 'font-bold')}>{i18n.title}</h1>
    <p className={clsx('mb-4')}>{i18n.aggregate}</p>
    <BooksSectionList className={clsx('w-full')} books={books} />
  </div>
);

export type ContainerProps = {
  className?: string;
  books: BooksSectionListProps['books'];
  booksTotal: number;
};
export const Container: React.FC<ContainerProps> = ({
  booksTotal: total,
  ...props
}) => {
  return (
    <Component
      {...props}
      i18n={{
        title: 'シリーズ',
        aggregate: `全${total}冊中${props.books.length}冊を表示中`,
      }}
    />
  );
};
