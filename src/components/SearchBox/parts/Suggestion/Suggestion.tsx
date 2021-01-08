import {
  faBook,
  faLayerGroup,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import {useTranslation} from 'react-i18next';

export const Icon: React.FC<{
  className?: string;
  type: ContainerProps['data']['type'];
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

export type ComponentProps = {
  className?: string;
  type: ContainerProps['data']['type'];
  text: string;
  href: string;
  i18n: {
    type: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
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

export type ContainerProps = {
  className?: ComponentProps['className'];
  data: {
    id: string;
  } & (
    | {
        type: 'Series' | 'Book';
        title: string;
      }
    | {
        type: 'Author';
        name: string;
      }
  );
};
export const Container: React.FC<ContainerProps> = ({data, ...props}) => {
  const {t} = useTranslation();

  const {href, text, i18n} = (() => {
    switch (data.type) {
      case 'Author':
        return {
          href: `/authors/${data.id}`,
          text: data.name,
          i18n: {
            type: t('common:author'),
          },
        };
      case 'Book':
        return {
          href: `/books/${data.id}`,
          text: data.title,
          i18n: {
            type: t('common:book'),
          },
        };
      case 'Series':
        return {
          href: `/series/${data.id}`,
          text: data.title,
          i18n: {
            type: t('common:series'),
          },
        };
    }
  })();
  return (
    <Component
      {...props}
      type={data.type}
      text={text}
      href={href}
      i18n={i18n}
    />
  );
};
