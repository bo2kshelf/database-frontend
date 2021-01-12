import clsx from 'clsx';
import React from 'react';
import {
  BookHeaderContentAuthor,
  BookHeaderContentAuthorProps,
} from '~/templates/BookPage/components/BookHeaderContentAuthor';

export type ComponentProps = {
  className?: string;
  authors: BookHeaderContentAuthorProps['author'][];
};
export const Component: React.FC<ComponentProps> = ({className, authors}) => (
  <div className={clsx(className, 'flex', 'flex-wrap')}>
    {authors.map((author) => (
      <BookHeaderContentAuthor
        className={clsx('mr-2')}
        key={author.id}
        author={author}
      />
    ))}
  </div>
);
