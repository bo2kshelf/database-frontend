// eslint-disable-next-line import/extensions
import configfile from '../../tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig';

export const tailwindConfig = resolveConfig(configfile);
