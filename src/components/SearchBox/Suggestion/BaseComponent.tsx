import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {SugesstionIcon, SugesstionIconProps} from '../SuggestionIcon';

export type BaseComponentProps = {
  className?: string;
  type: SugesstionIconProps['type'];
  text: string;
  href: string;
  i18n: {type: string};
};
export const PlainBaseComponent: React.FC<BaseComponentProps> = ({
  className,
  type,
  text,
  href,
  i18n,
}) => (
  <div
    className={clsx(
      className,
      'bg-white',
      'hover:bg-blue-300',
      'bg-opacity-90',
      'hover:bg-opacity-90',
    )}
  >
    <NextLink href={href}>
      <a className={clsx('px-4', 'py-3', 'flex', 'items-center')}>
        <SugesstionIcon className={clsx('mr-2')} type={type} />
        <span
          className={clsx(
            'mr-2',
            'select-none',
            'text-sm',
            'text-gray-500',
            'whitespace-nowrap',
          )}
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
export const BaseComponent = styled(PlainBaseComponent)`
  backdrop-filter: blur(3px);
`;
