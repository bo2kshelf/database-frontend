import clsx from 'clsx';
import NextImage from 'next/image';
import React from 'react';

export type ComponentProps = {
  className?: string;
  title: string;
  cover: string | null;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  cover,
}) => (
  <div className={clsx(className, 'relative', 'flex', 'justify-center')}>
    {cover && (
      <NextImage
        className={clsx('object-contain')}
        src={cover}
        alt={title}
        layout="fill"
      />
    )}
    {!cover && (
      <div
        className={clsx(
          'w-48',
          'h-full',
          'p-4',
          'flex',
          'justify-center',
          'items-center',
          'bg-gray-50',
        )}
      >
        <p>{title}</p>
      </div>
    )}
  </div>
);

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
