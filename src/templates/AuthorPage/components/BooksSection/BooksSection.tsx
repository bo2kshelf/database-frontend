import React from 'react';
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
  return (
    <Component
      {...props}
      i18n={{
        title: '全ての本',
        aggregate: `全${total}冊中${props.books.length}冊を表示中`,
      }}
    />
  );
};
