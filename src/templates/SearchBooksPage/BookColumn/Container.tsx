import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  book: {
    cover: string | null;
    title: string;
    id: string;
    authors: {
      id: string;
      roles: string[] | null;
      name: string;
    }[];
    relatedSeries: {
      id: string;
      title: string;
    }[];
  };
};
export const Container: React.FC<ContainerProps> = ({book, ...props}) => {
  return <Component {...props} {...book} />;
};
