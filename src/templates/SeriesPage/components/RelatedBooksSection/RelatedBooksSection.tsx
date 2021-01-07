import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Component as BooksSectionComponent,
  ComponentProps as BooksSectionComponentProps,
} from '../BooksSection';

export type ComponentProps = BooksSectionComponentProps;
export const Component: React.FC<ComponentProps> = BooksSectionComponent;

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
        title: t('common:related_series'),
      }}
    />
  );
};
