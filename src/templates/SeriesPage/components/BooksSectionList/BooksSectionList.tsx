import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  BooksSectionListItem,
  BooksSectionListItemProps,
} from '../BooksSectionListItem';

export type ComponentProps = {
  className?: string;
  books: BooksSectionListItemProps['book'][];
  i18n: {
    aggregate: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
  className,
  books,
  i18n,
}) => (
  <div className={clsx(className)}>
    <p className={clsx('mb-4')}>{i18n.aggregate}</p>
    <div className={clsx('grid', 'grid-cols-10', 'gap-4')}>
      {books.map((book) => (
        <BooksSectionListItem
          key={book.id}
          book={book}
          className={clsx('h-52')}
        />
      ))}
    </div>
  </div>
);

export type ContainerProps = {
  className?: string;
  books: ComponentProps['books'];
  booksTotal: number;
};
export const Container: React.FC<ContainerProps> = ({booksTotal, ...props}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      i18n={{
        aggregate: t('全{{all}}冊中{{actual}}冊を表示中', {
          all: booksTotal,
          actual: props.books.length,
          context: booksTotal === props.books.length ? 'all' : 'part',
        }),
      }}
    />
  );
};
