import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
  query: {
    title: string;
  };
  i18n: {
    result: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
  className,
  i18n,
  query,
}) => (
  <div className={clsx(className)}>
    <div className={clsx('flex', 'flex-col')}>
      <p className={clsx('text-md', 'mb-1')}>{i18n.result}</p>
      <p className={clsx('text-2xl', 'select-all')}>{query.title}</p>
    </div>
  </div>
);
