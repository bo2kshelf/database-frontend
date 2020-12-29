import clsx from 'clsx';
import React from 'react';
import {AuthorPageQuery} from '~/_generated/graphql-request';

export type ComponentProps = {
  className?: string;
  name: string;
};
export const Component: React.FC<ComponentProps> = ({className, name}) => (
  <main className={clsx(className)}>
    <p>{name}</p>
  </main>
);

export type ContainerProps = AuthorPageQuery;
export const Container: React.FC<ContainerProps> = ({author, ...props}) => {
  return <Component {...props} {...author} />;
};
