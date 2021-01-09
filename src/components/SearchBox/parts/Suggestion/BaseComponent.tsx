import {
  faBook,
  faLayerGroup,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';

export const Icon: React.FC<{
  className?: string;
  type: 'Author' | 'Book' | 'Series';
}> = ({className, type}) => {
  const icon = (() => {
    switch (type) {
      case 'Author':
        return faUserEdit;
      case 'Book':
        return faBook;
      case 'Series':
        return faLayerGroup;
    }
  })();
  return (
    <div className={clsx(className)}>
      <FontAwesomeIcon icon={icon} fixedWidth />
    </div>
  );
};

export type BaseComponentProps = {
  className?: string;
  type: 'Author' | 'Book' | 'Series';
  text: string;
  href: string;
  i18n: {
    type: string;
  };
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  type,
  text,
  href,
  i18n,
}) => (
  <div className={clsx(className, 'bg-white', 'hover:bg-gray-100')}>
    <NextLink href={href}>
      <a className={clsx('px-4', 'py-3', 'flex', 'items-center')}>
        <Icon
          className={clsx('mr-2', 'select-none', 'text-md', 'text-gray-500')}
          type={type}
        />
        <span
          className={clsx('mr-2', 'select-none', 'text-sm', 'text-gray-500')}
        >
          {i18n.type}
        </span>
        <p className={clsx('text-md', 'font-bold', 'select-all', 'truncate')}>
          {text}
        </p>
      </a>
    </NextLink>
  </div>
);
