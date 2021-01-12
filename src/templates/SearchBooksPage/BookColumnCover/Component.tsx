import clsx from 'clsx';
import NextImage from 'next/image';
import NextLink from 'next/link';
import React from 'react';

export type ComponentProps = {
  className?: string;
  cover: string | null;
  title: string;
  link: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  cover,
  title,
  link,
}) => (
  <NextLink href={link}>
    <a className={clsx(className, 'relative')}>
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
            'w-3/4',
            'h-full',
            'p-2',
            'flex',
            'justify-center',
            'items-center',
            'bg-gray-100',
            'mx-auto',
          )}
        >
          <p className={clsx('select-all', 'text-sm')}>{title}</p>
        </div>
      )}
    </a>
  </NextLink>
);
