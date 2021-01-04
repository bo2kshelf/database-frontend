import clsx from 'clsx';
import React from 'react';
import {SeriesSectionList, SeriesSectionListProps} from '../SeriesSectionList';

export type ComponentProps = {
  className?: string;
  series: SeriesSectionListProps['series'];
};
export const Component: React.FC<ComponentProps> = ({className, series}) => (
  <div className={clsx(className)}>
    <h1 className={clsx('mb-2')}>関連するシリーズ</h1>
    <SeriesSectionList series={series} />
  </div>
);

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
