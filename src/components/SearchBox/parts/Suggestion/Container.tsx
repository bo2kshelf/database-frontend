import React from 'react';
import {useTranslation} from 'react-i18next';
import {Component, ComponentProps} from './Component';

export type ContainerProps = {
  className?: ComponentProps['className'];
  data: {
    id: string;
  } & (
    | {
        type: 'Series' | 'Book';
        title: string;
      }
    | {
        type: 'Author';
        name: string;
      }
  );
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
    }
  })();
  return <Component {...props} type={data.type} text={text} href={href} />;
};
