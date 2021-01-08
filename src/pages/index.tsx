import clsx from 'clsx';
import React from 'react';
import {SearchBox} from '~/components/SearchBox';

export default function IndexPage() {
  return (
    <main>
      <SearchBox className={clsx('w-96')} />
    </main>
  );
}
