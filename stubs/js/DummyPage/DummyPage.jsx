import { setDocumentTitle } from '@alangiacomin/js-utils';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LayoutOneColumn from '../../components/LayoutOneColumn';

const DummyPage = (props) => {
  setDocumentTitle('Dummy');
  return (
    <LayoutOneColumn>
      <Row className="my-5">
        <Col lg={6} md={8} className="mx-auto">
          <h3>Pagina creata automaticamente</h3>
        </Col>
      </Row>
    </LayoutOneColumn>
  );
};

export default DummyPage;
