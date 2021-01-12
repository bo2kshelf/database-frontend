import {tailwindConfig} from './config';

export const tailwindViewports = {
  ...Object.fromEntries(
    Object.entries(tailwindConfig.theme.screens).map(([key, value]) => [
      `tw-m-${key}`,
      {
        name: `Tailwind ${key}`,
        type: 'tailwind',
        styles: {
          width: value,
          height: '100%',
        },
      },
    ]),
  ),
};
