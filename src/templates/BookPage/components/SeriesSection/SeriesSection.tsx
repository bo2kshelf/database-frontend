import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {SeriesSectionList, SeriesSectionListProps} from '../SeriesSectionList';

export type ComponentProps = {
  className?: string;
  series: SeriesSectionListProps['series'];
  i18n: {
    title: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
  className,
  series,
  i18n,
}) => (
  <div className={clsx(className)}>
    <h1 className={clsx('mb-2')}>{i18n.title}</h1>
    <SeriesSectionList series={series} />
  </div>
);

export type ContainerProps = {
  className?: string;
  series: ComponentProps['series'];
};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      i18n={{
        title: t('common:関連するシリーズ'),
      }}
    />
  );
};
