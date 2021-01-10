import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent, BaseComponentProps} from './BaseComponent';

export type ComponentProps = Omit<BaseComponentProps, 'i18n'>;
export const Component: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();

  const i18n = (() => {
    switch (props.type) {
      case 'Author':
        return {
          type: t('common:author'),
        };
      case 'Book':
        return {
          type: t('common:book'),
        };
      case 'Series':
        return {
          type: t('common:series'),
        };
    }
  })();

  return <BaseComponent {...props} i18n={i18n} />;
};
