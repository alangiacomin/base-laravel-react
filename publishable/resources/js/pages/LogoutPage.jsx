import { setDocumentTitle } from '@alangiacomin/js-utils';
import { httpRequest } from '@alangiacomin/ui-components/utils';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { postLogout } from '../apis/apiUtente';
import LayoutMain from '../components/LayoutMain';
import routes from '../config/routes';
import { userActions } from '../providers/UserProvider';

const LogoutPage = () => {
  setDocumentTitle('Logout');

  const user = useSelector((state) => state.user);

  const postLogoutActions = httpRequest.useActions({
    fulfilledAction: userActions.loggedOut,
  });
  useEffect(() => {
    if (user.id > 0) {
      // attendo 1 sec prima di fare il logout, così si vede il messaggio
      setTimeout(() => {
        postLogout(postLogoutActions);
      }, 1000);
    }
  });

  if (user.id > 0) {
    return (
      <LayoutMain>
        <Row className="my-5">
          <Col lg={6} md={8} className="mx-auto">
            <h3>Logout in corso...</h3>
          </Col>
        </Row>
      </LayoutMain>
    );
  }
  return <Redirect to={routes.home.to} />;
};

export default LogoutPage;
