import clsx from 'clsx';
import React from 'react';
import {SearchBox} from '../SearchBox';

export type ComponentProps = {
  className?: string;
};
export const Component: React.FC<ComponentProps> = ({className}) => (
  <nav className={clsx(className, 'py-4', 'bg-gray-600', 'flex')}>
    <div className={clsx('container', 'mx-auto')}>
      <SearchBox className={clsx('w-full', 'max-w-lg')} />
    </div>
  </nav>
);

export type ContainerProps = {
  className?: ComponentProps['className'];
};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
