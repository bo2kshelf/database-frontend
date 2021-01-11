import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {
  faBook,
  faLayerGroup,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Component} from './Component';

export const icons: {[key in ContainerProps['type']]: IconProp} = {
  Author: faUserEdit,
  Book: faBook,
  Series: faLayerGroup,
};

export type ContainerProps = {
  className?: string;
  type: 'Author' | 'Book' | 'Series';
};
export const Container: React.FC<ContainerProps> = ({type, ...props}) => {
  return <Component {...props} icon={icons[type]} />;
};
