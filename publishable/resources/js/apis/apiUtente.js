import { httpRequest } from '@alangiacomin/ui-components';

const postLogin = (email, password, actions) => httpRequest.post(
  '/login',
  { email, password },
  { actions },
);

const postLogout = (actions) => httpRequest.post(
  '/logout',
  { },
  { actions },
);

export {
  postLogin,
  postLogout,
};
