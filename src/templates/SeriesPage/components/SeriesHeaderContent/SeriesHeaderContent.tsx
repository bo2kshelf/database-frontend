import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
  title: string;
};
export const Component: React.FC<ComponentProps> = ({className, title}) => (
  <div className={clsx(className)}>
    <h1 className={clsx('mb-2', 'text-2xl', 'font-bold', 'select-all')}>
      {title}
    </h1>
  </div>
);

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
