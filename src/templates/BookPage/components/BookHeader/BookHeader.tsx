import clsx from 'clsx';
import React from 'react';
import {
  BookHeaderBookcover,
  BookHeaderBookcoverProps,
} from '~/templates/BookPage/components/BookHeaderBookcover';
import {
  BookHeaderContent,
  BookHeaderContentProps,
} from '~/templates/BookPage/components/BookHeaderContent';

export type ComponentProps = {
  className?: string;
  title: BookHeaderBookcoverProps['title'] & BookHeaderContentProps['title'];
  cover: BookHeaderBookcoverProps['cover'];
  authors: BookHeaderContentProps['authors'];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  cover,
  authors,
}) => (
  <div className={clsx(className, 'grid', 'grid-cols-4')}>
    <BookHeaderBookcover
      className={clsx('col-span-1', 'h-72')}
      title={title}
      cover={cover}
    />
    <BookHeaderContent
      className={clsx('col-span-2')}
      title={title}
      authors={authors}
    />
  </div>
);

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
