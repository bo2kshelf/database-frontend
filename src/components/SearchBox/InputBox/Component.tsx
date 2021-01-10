import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent, BaseComponentProps} from './BaseComponent';

export type ComponentProps = Omit<BaseComponentProps, 'i18n' | 'a11y'>;
export const Component: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();

  return (
    <BaseComponent
      {...props}
      i18n={{placeholder: t('searchbox.placeholder')}}
      a11y={{label: 'Searchbox'}}
    />
  );
};
