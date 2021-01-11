import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
  icon: IconProp;
};

export const Component: React.FC<ComponentProps> = ({className, icon}) => (
  <div className={clsx(className, 'select-none')}>
    <FontAwesomeIcon className={clsx('text-gray-500')} icon={icon} fixedWidth />
  </div>
);
