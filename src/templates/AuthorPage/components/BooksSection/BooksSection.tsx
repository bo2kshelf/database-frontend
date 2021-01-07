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
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {t} = useTranslation();

  return <Component {...props} i18n={{title: t('全ての本')}} />;
};
