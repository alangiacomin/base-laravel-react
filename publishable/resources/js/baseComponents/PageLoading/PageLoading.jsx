import React from 'react';
import { Spinner } from 'react-bootstrap';

const PageLoading = () => (
  <div className="my-5 text-center">
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);

export default PageLoading;
