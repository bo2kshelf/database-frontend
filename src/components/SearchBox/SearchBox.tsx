import clsx from 'clsx';
import NextLink from 'next/link';
import React, {useEffect, useState} from 'react';
import {useSearchBoxLazyQuery} from '~/_generated/apollo';

export type ComponentProps = {
  className?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  loading: boolean;
  empty: boolean;
  data: (
    | {
        type: 'Series';
        id: string;
        title: string;
        href: string;
      }
    | {
        type: 'Book';
        id: string;
        title: string;
        href: string;
      }
    | {
        type: 'Author';
        id: string;
        name: string;
        href: string;
      }
  )[];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  onChange,
  empty,
  loading,
  data,
}) => (
  <div className={clsx(className)}>
    <input
      className={clsx('bg-gray-100', 'text-xl')}
      type="text"
      onChange={onChange}
      aria-label="Searchbox"
    />
    {loading && <span>LOADING</span>}
    {!empty &&
      data.map((node) => (
        <div key={node.id}>
          <NextLink href={node.href}>
            <a>
              <span className={clsx('mr-2')}>{node.type}</span>
              {node.type === 'Author' && <span>{node.name}</span>}
              {node.type !== 'Author' && <span>{node.title}</span>}
            </a>
          </NextLink>
        </div>
      ))}
  </div>
);

export type ContainerProps = {
  className?: ComponentProps['className'];
};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const [query, setQuery] = useState('');
  const [search, {loading, data}] = useSearchBoxLazyQuery();

  const onChange: ComponentProps['onChange'] = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    search({variables: {query, max: 10}});
  }, [query, search]);

  return (
    <Component
      {...props}
      onChange={onChange}
      loading={loading}
      empty={query === ''}
      data={
        data?.searchMixed.edges.map(({node}) => {
          switch (node.__typename) {
            case 'Author':
              return {type: 'Author', href: `/authors/${node.id}`, ...node};
            case 'Book':
              return {type: 'Book', href: `/books/${node.id}`, ...node};
            case 'Series':
              return {type: 'Series', href: `/series/${node.id}`, ...node};
          }
        }) || []
      }
    />
  );
};
