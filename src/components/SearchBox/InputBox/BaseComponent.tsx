import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onClick(): void;
  a11y: {
    label: string;
  };
  i18n: {
    placeholder: string;
  };
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  onChange,
  onClick,
  i18n,
  a11y,
}) => (
  <div
    className={clsx(
      className,
      'px-3',
      'py-1',
      'flex',
      'items-center',
      'rounded-xl',
      'bg-white',
    )}
    onClick={onClick}
    onKeyPress={onClick}
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
