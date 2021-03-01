import { setDocumentTitle } from '@alangiacomin/js-utils';
import { lazyImport } from '@alangiacomin/ui-components/utils';
import React from 'react';
import PageLoading from '../baseComponents/PageLoading';
import LayoutMain from '../components/LayoutMain';

const Login = lazyImport(() => import('../components/Login'), (<PageLoading />));

const LoginPage = () => {
  setDocumentTitle('Login');

  return (
    <LayoutMain>
      <Login />
    </LayoutMain>
  );
};

export default LoginPage;
