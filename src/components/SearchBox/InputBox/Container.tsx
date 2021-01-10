import React from 'react';
import {Component, ComponentProps} from './Component';

export type ContainerProps = {
  className?: string;
  onChange(query: string): void;
  onClick: ComponentProps['onClick'];
};
export const Container: React.FC<ContainerProps> = ({
  onChange,
  onClick,
  ...props
}) => {
  return (
    <Component
      {...props}
      onChange={(event) => onChange(event.target.value)}
      onClick={onClick}
    />
  );
};
