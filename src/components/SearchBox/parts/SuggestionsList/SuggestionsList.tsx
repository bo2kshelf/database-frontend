import clsx from 'clsx';
import React from 'react';
import {Sugesstion, SugesstionProps} from '../Suggestion';
import {
  SuggestionNoResult,
  SuggestionNoResultProps,
} from '../SuggestionNoResult';

export type ComponentProps = {
  className?: string;
  empty: boolean;
  data: SugesstionProps['data'][];
  query: SuggestionNoResultProps['query'];
  onClick(): void;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  empty,
  data: list,
  query,
  onClick,
}) => (
  <div className={clsx(className)} onClick={onClick} onKeyPress={onClick}>
    <div
      className={clsx(
        'divide-y',
        'divide-gray-200',
        'border',
        'border-gray-100',
      )}
    >
      {empty && <SuggestionNoResult className={clsx()} query={query} />}
      {list.map((data) => (
        <Sugesstion className={clsx('w-full')} key={data.id} data={data} />
      ))}
    </div>
  </div>
);

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
      {...props}
      query={query}
    />
  );
};
