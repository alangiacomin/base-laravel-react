import { setDocumentTitle } from '@alangiacomin/js-utils';
import React, { lazy } from 'react';
import SuspensePageLoading from '../baseComponents/Suspense/SuspensePageLoading';
import LayoutMain from '../components/LayoutMain';

const Error = lazy(() => import('../components/Error'));

const ErrorPage = (props) => {
  setDocumentTitle();
  return (
    <LayoutMain>
      <SuspensePageLoading>
        <Error {...props} />
      </SuspensePageLoading>
    </LayoutMain>
  );
};

export default ErrorPage;
