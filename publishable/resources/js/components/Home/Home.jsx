// import { PropTypes } from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Home = (props) => (
  <>
    <Row>
      <Col><h1>Qui titolo</h1></Col>
    </Row>
    <Row>
      <Col>Qui testo</Col>
    </Row>
  </>
);

// Home.propTypes = {
//   testo: PropTypes.string.isRequired,
// }

export default Home;
