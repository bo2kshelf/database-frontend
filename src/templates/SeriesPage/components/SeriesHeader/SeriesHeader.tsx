import clsx from 'clsx';
import React from 'react';
import {
  SeriesHeaderContent,
  SeriesHeaderContentProps,
} from '../SeriesHeaderContent';

export type ComponentProps = {
  className?: string;
  title: SeriesHeaderContentProps['title'];
};
export const Component: React.FC<ComponentProps> = ({className, title}) => (
  <div className={clsx(className, 'grid', 'grid-cols-4')}>
    <SeriesHeaderContent title={title} className={clsx('col-span-2')} />
  </div>
);

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
