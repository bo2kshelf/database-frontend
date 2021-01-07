import clsx from 'clsx';
import React from 'react';
import {
  SeriesSectionListItem,
  SeriesSectionListItemProps,
} from '../SeriesSectionListItem';

export type ComponentProps = {
  className?: string;
  series: SeriesSectionListItemProps['series'][];
};
export const Component: React.FC<ComponentProps> = ({className, series}) => (
  <div className={clsx(className, 'flex', 'flex-col', 'space-y-4')}>
    {series.map((seriesNode) => (
      <SeriesSectionListItem key={seriesNode.id} series={seriesNode} />
    ))}
  </div>
);

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
