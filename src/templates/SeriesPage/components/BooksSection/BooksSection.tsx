import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {BooksSectionList, BooksSectionListProps} from '../BooksSectionList';

export type ComponentProps = {
  className?: string;
  books: BooksSectionListProps['books'];
  booksTotal: BooksSectionListProps['booksTotal'];
  i18n: {
    title: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
  className,
  books,
  booksTotal,
  i18n,
}) => (
  <div className={clsx(className)}>
    <h1 className={clsx('mb-2', 'text-xl', 'font-bold')}>{i18n.title}</h1>
    <BooksSectionList
      className={clsx('w-full')}
      books={books}
      booksTotal={booksTotal}
    />
  </div>
);

export type ContainerProps = {
  className?: string;
  books: ComponentProps['books'];
  booksTotal: number;
};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <Component
      {...props}
      i18n={{
        title: t('common:series'),
      }}
    />
  );
};
