import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Sugesstion, SugesstionProps} from '../Suggestion';

export type ComponentProps = {
  className?: string;
  empty: boolean;
  data: SugesstionProps['data'][];
  i18n: {
    noResult: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
  className,
  empty,
  data: list,
  i18n,
}) => (
  <div className={clsx(className)}>
    <div
      className={clsx(
        'divide-y',
        'divide-gray-200',
        'border',
        'border-gray-100',
      )}
    >
      {empty && (
        <div className={clsx('px-4', 'py-3')}>
          <p>{i18n.noResult}</p>
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
      i18n={{
        noResult: t('searchbox.no_result', {query}),
      }}
    />
  );
};
