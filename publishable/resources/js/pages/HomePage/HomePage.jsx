import { setDocumentTitle } from '@alangiacomin/js-utils';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LayoutMain from '../../components/LayoutMain/LayoutMain';

const HomePage = () => {
  setDocumentTitle();
  return (
    <LayoutMain>
      <Row>
        <Col><h1>Qui titolo</h1></Col>
      </Row>
      <Row>
        <Col>Qui testo</Col>
      </Row>
    </LayoutMain>
  );
};

export default HomePage;
