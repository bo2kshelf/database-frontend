import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
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
  const {t} = useTranslation();
  return (
    <Component
      {...props}
      i18n={{
        title: t('common:series'),
        aggregate: t('全{{all}}冊中{{actual}}冊を表示中', {
          all: total,
          actual: props.books.length,
          context: total === props.books.length ? 'all' : 'part',
        }),
      }}
    />
  );
};
