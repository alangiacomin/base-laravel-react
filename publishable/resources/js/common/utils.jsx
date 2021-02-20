import React, { lazy, Suspense } from 'react';

const lazyImport = (func) => {
  const Component = lazy(func);
  return () => (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
};

export {
  // eslint-disable-next-line import/prefer-default-export
  lazyImport,
};
