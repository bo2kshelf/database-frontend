import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import {
  BookColumnContentAuthors,
  BookColumnContentAuthorsProps,
} from '../BookColumnContentAuthors';

export type ComponentProps = {
  className?: string;
  link: string;
  title: string;
  authors: BookColumnContentAuthorsProps['authors'];
  relatedSeries: {
    id: string;
    title: string;
  }[];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  link,
  authors,
}) => (
  <div className={clsx(className)}>
    <NextLink href={link}>
      <a className={clsx('block', 'mb-2')}>
        <p className={clsx('text-xl', 'font-bold', 'select-all', 'truncate')}>
          {title}
        </p>
      </a>
    </NextLink>
    <BookColumnContentAuthors className={clsx('flex')} authors={authors} />
  </div>
);
