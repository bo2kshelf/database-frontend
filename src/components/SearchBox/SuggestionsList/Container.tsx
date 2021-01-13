import React from 'react';
import {Component, ComponentProps} from './Component';

export type ContainerProps = {
  className?: ComponentProps['className'];
  query: string;
  data: ComponentProps['data'];
  loading: boolean;
  onClick: ComponentProps['onClick'];
};
export const Container: React.FC<ContainerProps> = ({
  query,
  loading,
  ...props
}) => {
  return (
    <Component
      empty={!loading && props.data.length === 0}
      search={{type: 'Search', query}}
      {...props}
    />
  );
};
