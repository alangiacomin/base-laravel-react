import { PropTypes } from 'prop-types';
import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer';
import MainHeader from '../MainHeader';
import TopNavbar from '../TopNavbar';

const LayoutMain = (props) => {
  const { children } = props;
  return (
    <>
      <MainHeader />
      <Container>
        <TopNavbar />
        {children}
        <Footer />
      </Container>
    </>
  );
};

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
