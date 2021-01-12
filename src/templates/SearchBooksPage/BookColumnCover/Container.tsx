import React from 'react';
import {Component, ComponentProps} from './Component';

export type ContainerProps = Omit<ComponentProps, 'link'> & {id: string};
export const Container: React.FC<ContainerProps> = ({id, ...props}) => {
  return <Component {...props} link={`/books/${id}`} />;
};
