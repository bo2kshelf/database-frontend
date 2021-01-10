import clsx from 'clsx';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  query: string;
  i18n: {noResultFor: string};
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
  query,
}) => (
  <div
    className={clsx(
      className,
      'px-4',
      'py-4',
      'flex',
      'flex-col',
      'justify-center',
      'items-center',
    )}
  >
    <p className={clsx('mb-2')}>{i18n.noResultFor}</p>
    <p className={clsx('w-full', 'text-center', 'font-bold', 'truncate')}>
      {query}
    </p>
  </div>
);
