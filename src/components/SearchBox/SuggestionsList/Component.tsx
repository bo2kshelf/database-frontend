import clsx from 'clsx';
import React from 'react';
import {Sugesstion} from '../Suggestion';
import {
  AuthorType,
  BookType,
  SearchType,
  SeriesType,
} from '../Suggestion/Container';
import {SuggestionNoResult} from '../SuggestionNoResult';

export type ComponentProps = {
  className?: string;
  empty: boolean;
  search: SearchType;
  data: (AuthorType | BookType | SeriesType)[];
  onClick(): void;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  empty,
  data: list,
  search,
  onClick,
}) => (
  <div className={clsx(className)} onClick={onClick} onKeyPress={onClick}>
    <div className={clsx('divide-y', 'divide-gray-200', 'shadow-md')}>
      {empty && <SuggestionNoResult className={clsx()} query={search.query} />}
      {!empty && (
        <>
          <Sugesstion className={clsx('w-full')} data={search} />
          {list.map((data) => (
            <Sugesstion className={clsx('w-full')} key={data.id} data={data} />
          ))}
        </>
      )}
    </div>
  </div>
);
