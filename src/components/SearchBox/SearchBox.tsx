import clsx from 'clsx';
import React, {useEffect, useState} from 'react';
import {useSearchBoxLazyQuery} from '~/_generated/apollo';
import {InputBox, InputBoxProps} from './parts/InputBox';
import {SuggestionsList, SuggestionsListProps} from './parts/SuggestionsList';

export type ComponentProps = {
  className?: string;
  query: string;
  active: boolean;
  activate(): void;
  deactivate(): void;
  onChange: InputBoxProps['onChange'];
  loading: boolean;
  data: SuggestionsListProps['data'];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  onChange,
  query,
  loading,
  active,
  activate,
  deactivate,
  data,
}) => (
  <div className={clsx(className, 'relative')}>
    {active && (
      <div
        className={clsx('z-0', 'fixed', 'inset-0')}
        onClick={deactivate}
        onKeyPress={deactivate}
      />
    )}
    <InputBox
      className={clsx('relative', 'w-full', 'z-10')}
      onChange={onChange}
      onClick={activate}
    />
    {active && (
      <SuggestionsList
        className={clsx('absolute', 'top-full', 'w-full', 'z-10')}
        query={query}
        loading={loading}
        data={data}
        onClick={deactivate}
      />
    )}
  </div>
);

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
      onChange={(query) => {
        setQuery(query);
        setActive(query !== '');
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
