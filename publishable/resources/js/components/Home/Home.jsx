// import { PropTypes } from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Home = (props) => {
  // const { testo } = props;
  return (
    <>
      <Row>
        <Col><h1>Qui titolo</h1></Col>
      </Row>
      <Row>
        <Col>Qui testo</Col>
      </Row>
    </>
  );
};

// Home.propTypes = {
//   testo: PropTypes.string.isRequired,
// };

export default Home;
