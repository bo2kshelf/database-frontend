import React from 'react';
import {useTranslation} from 'react-i18next';
import {Component, ComponentProps} from './Component';

export type ContainerProps = Omit<ComponentProps, 'i18n'> & {
  query: {
    title: string;
  };
  aggregate: {
    count: number;
  };
};
export const Container: React.FC<ContainerProps> = ({
  query,
  aggregate,
  ...props
}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      query={query}
      i18n={{
        result: t('次の検索結果は{{count}}件該当しました', {
          count: aggregate.count,
        }),
      }}
    />
  );
};
