import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  BooksSectionProps,
  Component as BooksSectionComponent,
  ComponentProps as BooksSectionComponentProps,
} from '~/templates/SeriesPage/components/BooksSection';

export type ComponentProps = BooksSectionComponentProps;
export const Component = BooksSectionComponent;

export type ContainerProps = BooksSectionProps;
export const Container: React.FC<ContainerProps> = ({
  booksTotal: total,
  ...props
}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      i18n={{
        title: t('全ての本'),
        aggregate: t('全{{all}}冊中{{actual}}冊を表示中', {
          all: total,
          actual: props.books.length,
          context: total === props.books.length ? 'all' : 'part',
        }),
      }}
    />
  );
};
