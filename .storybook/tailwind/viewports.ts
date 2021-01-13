import {tailwindConfig} from './config';

export const viewportsEntities = Object.entries(
  tailwindConfig.theme.screens,
).map(([key, value]) => [
  `tw-m-${key}`,
  {
    name: `Tailwind ${key}`,
    type: 'tailwind',
    styles: {
      width: value,
      height: '100%',
    },
  },
]);

export const viewportsKeys = viewportsEntities.map(([key]) => key);

export const viewports = {
  ...Object.fromEntries(viewportsEntities),
};
