import React from 'react';
import {useTranslation} from 'react-i18next';
import {Component, ComponentProps} from './Component';

export type AuthorType = {
  type: 'Author';
  id: string;
  name: string;
};
export type BookType = {
  type: 'Book';
  id: string;
  title: string;
};
export type SeriesType = {
  type: 'Series';
  id: string;
  title: string;
};
export type SearchType = {
  type: 'Search';
  query: string;
};

export type ContainerProps = {
  className?: ComponentProps['className'];
  data: AuthorType | BookType | SeriesType | SearchType;
};
export const Container: React.FC<ContainerProps> = ({data, ...props}) => {
  const {t} = useTranslation();

  const {href, text, i18n} = (() => {
    switch (data.type) {
      case 'Author':
        return {
          href: `/authors/${data.id}`,
          text: data.name,
          i18n: {
            type: t('common:author'),
          },
        };
      case 'Book':
        return {
          href: `/books/${data.id}`,
          text: data.title,
          i18n: {
            type: t('common:book'),
          },
        };
      case 'Series':
        return {
          href: `/series/${data.id}`,
          text: data.title,
          i18n: {
            type: t('common:series'),
          },
        };
      case 'Search':
        return {
          href: `/search?query=${data.query}`,
          text: data.query,
        };
    }
  })();
  return <Component {...props} type={data.type} text={text} href={href} />;
};
