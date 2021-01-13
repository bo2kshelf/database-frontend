import clsx from 'clsx';
import React from 'react';
import {BookColumnContent, BookColumnContentProps} from '../BookColumnContent';
import {BookColumnCover, BookColumnCoverProps} from '../BookColumnCover';

export type ComponentProps = {
  className?: string;
} & Omit<BookColumnCoverProps, 'className'> &
  Omit<BookColumnContentProps, 'className'>;
export const Component: React.FC<ComponentProps> = ({className, ...rest}) => (
  <div
    className={clsx(
      className,
      'grid',
      'grid-cols-4',
      'lg:grid-cols-3',
      'bg-white',
      'shadow',
      'p-2',
      'rounded',
    )}
  >
    <BookColumnCover className={clsx('col-span-1')} {...rest} />
    <BookColumnContent
      className={clsx('col-start-2', 'col-span-full')}
      {...rest}
    />
  </div>
);
