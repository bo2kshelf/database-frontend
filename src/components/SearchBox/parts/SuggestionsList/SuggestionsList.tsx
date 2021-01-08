import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Sugesstion, SugesstionProps} from '../Suggestion';

export type ComponentProps = {
  className?: string;
  empty: boolean;
  data: SugesstionProps['data'][];
  query: string;
  onClick(): void;
  i18n: {
    noResultFor: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
  className,
  empty,
  data: list,
  query,
  onClick,
  i18n,
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
      {empty && (
        <div
          className={clsx(
            'px-4',
            'py-4',
            'flex',
            'flex-col',
            'justify-center',
            'items-center',
          )}
        >
          <p className={clsx('mb-2')}>{i18n.noResultFor}</p>
          <p className={clsx('w-full', 'text-center', 'font-bold', 'truncate')}>
            {query}
          </p>
        </div>
      )}
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
  const {t} = useTranslation();

  return (
    <Component
      empty={!loading && props.data.length === 0}
      {...props}
      query={query}
      i18n={{
        noResultFor: t('searchbox.no_result_for', {query}),
      }}
    />
  );
};
