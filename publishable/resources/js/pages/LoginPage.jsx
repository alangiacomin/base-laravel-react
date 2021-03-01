import { setDocumentTitle } from '@alangiacomin/js-utils';
import { lazyImport } from '@alangiacomin/ui-components/utils';
import React from 'react';
import LayoutMain from '../components/LayoutMain';

const Login = lazyImport(() => import('../components/Login'));

const LoginPage = () => {
  setDocumentTitle('Login');

  return (
    <LayoutMain>
      <Login />
    </LayoutMain>
  );
};

export default LoginPage;
