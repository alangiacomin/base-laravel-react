import { lazyImport, setDocumentTitle } from '@alangiacomin/ui-components';
import React from 'react';
import PageLoading from '../baseComponents/PageLoading';
import LayoutMain from '../components/LayoutMain';

const Home = lazyImport(() => import('../components/Home'), (<PageLoading />));

const HomePage = () => {
  setDocumentTitle();
  return (
    <LayoutMain>
      <Home />
    </LayoutMain>
  );
};

export default HomePage;
