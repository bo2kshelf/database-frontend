import clsx from 'clsx';
import React from 'react';
import {
  BookHeaderContentAuthor,
  BookHeaderContentAuthorProps,
} from '~/templates/BookPage/components/BookHeaderContentAuthor';

export type ComponentProps = {
  className?: string;
  title: string;
  authors: BookHeaderContentAuthorProps['author'][];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  authors,
}) => (
  <div className={clsx(className)}>
    <h1 className={clsx('mb-2', 'text-2xl', 'font-bold', 'select-all')}>
      {title}
    </h1>
    <div className={clsx('flex', 'space-x-2')}>
      {authors.map((author) => (
        <BookHeaderContentAuthor key={author.id} author={author} />
      ))}
    </div>
  </div>
);

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
