import clsx from 'clsx';
import NextImage from 'next/image';
import NextLink from 'next/link';
import React from 'react';

export type ComponentProps = {
  className?: string;
  title: string;
  cover: string | null;
  link: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  cover,
  link,
}) => (
  <NextLink href={link}>
    <a
      className={clsx(
        className,
        'relative',
        'flex',
        'justify-center',
        'bg-gray-50',
      )}
    >
      {cover && (
        <NextImage
          className={clsx('object-contain')}
          src={cover}
          alt={title}
          layout="fill"
        />
      )}
      {!cover && (
        <div
          className={clsx(
            'h-full',
            'p-4',
            'flex',
            'justify-center',
            'items-center',
          )}
        >
          <p className={clsx('text-sm')}>{title}</p>
        </div>
      )}
    </a>
  </NextLink>
);

export type ContainerProps = {
  className?: string;
  book: {
    id: string;
    title: string;
    cover: string | null;
  };
};
export const Container: React.FC<ContainerProps> = ({book, ...props}) => {
  return <Component {...props} {...book} link={`/books/${book.id}`} />;
};
