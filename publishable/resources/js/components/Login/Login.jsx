import { Form, Input, Submit } from '@alangiacomin/ui-components/components';
import { httpRequest } from '@alangiacomin/ui-components/utils';
import React, { useCallback, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { postLogin } from '../../apis/apiUtente';
import routes from '../../config/routes';
import { userActions } from '../../providers/UserProvider';

const Login = () => {
  const { t } = useTranslation('login');
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const initialValues = {
    email: 'admin@admin.com',
    password: 'password',
  };

  const validationSchema = yup.object({
    email: yup.string().required('Required')
      .email('Invalid email address'),
    password: yup.string().required('Required'),
  });

  const postLoginActions = httpRequest.useActions('POST_LOGIN');

  const onSubmit = useCallback((values, { setSubmitting }) => {
    setErrorMessage('');
    postLogin(values.email, values.password, postLoginActions)
      .then((response) => {
        // location.state && location.state.referrer && history.push(location.state.referrer.pathname);
        dispatch(userActions.loggedIn(response));
        history.push(routes.home.to);
      })
      .catch((error) => {
        setSubmitting(false);
        if (error.response?.status === 422) {
          setErrorMessage(t('login_failed'));
        }
      });
  }, [t, history, dispatch, postLoginActions]);
  return (
    <Container>
      <Form
        className="my-5"
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Row>
          <Col>
            <Input
              name="email"
              label="Email:"
              labelLeft
              placeholder="email"
              autoFocus
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              name="password"
              label="Password:"
              labelLeft
              placeholder="password"
              type="password"
            />
          </Col>
        </Row>
        <Submit>Login</Submit>
        <div className="error">{errorMessage}</div>
      </Form>
    </Container>
  );
};

export default Login;
