import { lazy, Suspense } from "react";

const lazyImport = (func) => {
  const Component = lazy(func);
  return () => (
    <Suspense fallback={null}>
      <Component />
    </Suspense>);
}

export {
  lazyImport
};
