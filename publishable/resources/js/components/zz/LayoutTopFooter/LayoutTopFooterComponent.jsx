import { PropTypes } from 'prop-types';
import React from 'react';
import Footer from '../Footer';
import TopNavbar from '../TopNavbar';

const LayoutTopFooterComponent = (props) => {
  const { children } = props;
  return (
    <>
      <TopNavbar />
      {children}
      <Footer />
    </>
  );
};

LayoutTopFooterComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutTopFooterComponent;
