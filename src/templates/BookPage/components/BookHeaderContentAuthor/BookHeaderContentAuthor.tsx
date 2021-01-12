import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';

export type ComponentProps = {
  className?: string;
  name: string;
  roles?: string;
  link: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  roles,
  name,
  link,
}) => (
  <div className={clsx(className, 'flex')}>
    {roles && (
      <span className={clsx('mr-1', 'whitespace-nowrap')}>{roles}</span>
    )}
    <NextLink href={link}>
      <a className={clsx('font-bold', 'select-all', 'whitespace-nowrap')}>
        {name}
      </a>
    </NextLink>
  </div>
);

export type ContainerProps = {
  className?: string;
  author: {
    id: string;
    name: string;
    roles: string[] | null;
  };
};
export const Container: React.FC<ContainerProps> = ({author, ...props}) => {
  return (
    <Component
      {...props}
      {...author}
      roles={author.roles?.join(',')}
      link={`/authors/${author.id}`}
    />
  );
};
