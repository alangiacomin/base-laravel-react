import { setDocumentTitle } from '@alangiacomin/js-utils';
import React from 'react';
import Home from '../../components/Home';
import LayoutMain from '../../components/LayoutMain/LayoutMain';

const HomePage = () => {
  setDocumentTitle();
  return (
    <LayoutMain>
      <Home />
    </LayoutMain>
  );
};

export default HomePage;
