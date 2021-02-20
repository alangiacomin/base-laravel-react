import { ConnectedRouter } from 'connected-react-router';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from './baseComponents/ErrorBoundary/ErrorBoundary';
import ProtectedRoute from './baseComponents/ProtectedRoute';
import ScrollToTop from './baseComponents/ScrollToTop/ScrollToTop';
import { renderNotFound } from './common/renderHelpers';
import routesWithComponents from './config/routesWithComponents';
import { history } from './configureStore';

const App = (props) => {
  const { store } = props;
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop />
        <Switch>
          {Object
            .entries(routesWithComponents)
            .map(([key, route]) => (route.component ? <ProtectedRoute key={key} {...route} /> : null))}
          <ErrorBoundary>
            <Route path="*">
              {renderNotFound()}
            </Route>
          </ErrorBoundary>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
};

export default App;
