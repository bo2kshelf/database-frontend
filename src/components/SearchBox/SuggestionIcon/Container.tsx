import {
  faBook,
  faLayerGroup,
  faSearch,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Component} from './Component';

export const icons = {
  Author: faUserEdit,
  Book: faBook,
  Series: faLayerGroup,
  Search: faSearch,
};

export type ContainerProps = {
  className?: string;
  type: keyof typeof icons;
};
export const Container: React.FC<ContainerProps> = ({type, ...props}) => {
  return <Component {...props} icon={icons[type]} />;
};
