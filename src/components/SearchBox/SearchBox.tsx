import clsx from 'clsx';
import React, {useEffect, useState} from 'react';
import {useSearchBoxLazyQuery} from '~/_generated/apollo';
import {InputBox, InputBoxProps} from './parts/InputBox';
import {SuggestionsList, SuggestionsListProps} from './parts/SuggestionsList';

export type ComponentProps = {
  className?: string;
  noInput: boolean;
  query: string;
} & SuggestionsListProps &
  InputBoxProps;
export const Component: React.FC<ComponentProps> = ({
  className,
  onChange,
  noInput,
  query,
  loading,
  data,
}) => (
  <div className={clsx(className, 'relative')}>
    <InputBox className={clsx('w-full')} onChange={onChange} />
    {!noInput && (
      <SuggestionsList
        className={clsx('absolute', 'top-full', 'w-full')}
        query={query}
        loading={loading}
        data={data}
      />
    )}
  </div>
);

export type ContainerProps = {
  className?: ComponentProps['className'];
};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const [query, setQuery] = useState('');
  const [search, {loading, data}] = useSearchBoxLazyQuery();

  useEffect(() => {
    if (query === '') {
      return;
    }
    search({variables: {query, max: 10}});
  }, [query, search]);

  return (
    <Component
      {...props}
      query={query}
      onChange={setQuery}
      loading={loading}
      noInput={query === ''}
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
