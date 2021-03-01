import { setDocumentTitle } from '@alangiacomin/js-utils';
import React, { lazy } from 'react';
import PageLoading from '../baseComponents/PageLoading';
import LayoutMain from '../components/LayoutMain';

const Error = lazy(() => import('../components/Error'), (<PageLoading />));

const ErrorPage = (props) => {
  setDocumentTitle();
  return (
    <LayoutMain>
      <Error {...props} />
    </LayoutMain>
  );
};

export default ErrorPage;
