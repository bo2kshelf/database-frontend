import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';

export type ComponentProps = {
  className?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  a11y: {
    label: string;
  };
  i18n: {
    placeholder: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
  className,
  onChange,
  i18n,
  a11y,
}) => (
  <div
    className={clsx(
      className,
      'px-4',
      'py-2',
      'border',
      'border-gray-300',
      'flex',
      'items-center',
    )}
  >
    <FontAwesomeIcon
      icon={faSearch}
      className={clsx('text-gray-500', 'text-sm', 'mr-2')}
      fixedWidth
    />
    <input
      className={clsx('w-full', 'outline-none', 'text-lg', 'px-1', 'py-1')}
      type="text"
      placeholder={i18n.placeholder}
      onChange={onChange}
      aria-label={a11y.label}
    />
  </div>
);

export type ContainerProps = {
  className?: string;
  onChange(query: string): void;
};
export const Container: React.FC<ContainerProps> = ({onChange, ...props}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      onChange={(event) => onChange(event.target.value)}
      i18n={{placeholder: t('searchbox.placeholder')}}
      a11y={{label: 'Searchbox'}}
    />
  );
};
