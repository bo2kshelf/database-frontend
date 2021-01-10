import React from 'react';
import {Component, ComponentProps} from './Component';

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
