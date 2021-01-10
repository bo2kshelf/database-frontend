import clsx from 'clsx';
import React from 'react';
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
