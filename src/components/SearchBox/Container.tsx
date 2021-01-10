import React, {useEffect, useState} from 'react';
import {useSearchBoxLazyQuery} from '~/_generated/apollo';
import {Component, ComponentProps} from './Component';

export type ContainerProps = {
  className?: ComponentProps['className'];
};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);
  const [search, {loading, data}] = useSearchBoxLazyQuery();

  useEffect(() => {
    if (query === '') {
      return;
    }
    search({variables: {query, max: 10}});
  }, [query, search]);

  const activate = () => setActive(query.length !== 0);
  const deactivate = () => setActive(false);

  return (
    <Component
      {...props}
      query={query}
      loading={loading}
      active={active}
      activate={activate}
      deactivate={deactivate}
      onChange={(input) => {
        setQuery(input);
        setActive(input !== '');
      }}
      data={
        data?.searchMixed.edges.map(({node}) => {
          switch (node.__typename) {
            case 'Author':
              return {type: 'Author', ...node};
            case 'Book':
              return {type: 'Book', ...node};
            case 'Series':
              return {type: 'Series', ...node};
          }
        }) || []
      }
    />
  );
};
