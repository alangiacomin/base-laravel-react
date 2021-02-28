import { createAction, createReducer } from '@reduxjs/toolkit';

// ACTIONS

const actionPrefix = 'USER';
const actions = {
  loginFailed: createAction(`${actionPrefix}/LOGIN_FAILED`),
  loggedIn: createAction(`${actionPrefix}/LOGGED_IN`),
  loggedOut: createAction(`${actionPrefix}/LOGGED_OUT`),
  setProfile: createAction(`${actionPrefix}/SET_PROFILE`),
};

// REDUCERS

// const initialState = {};
//
// export const reducer = createReducer(initialState, {
//   [actions.loggedIn]: (state, action) => {},
//   [actions.loggedOut]: (state, action) => initialState,
//   [actions.profile]: (state, action) => ({ ...state, ...action.payload }),
// });

const reducer = (initialState) => createReducer(initialState, {
  [actions.loggedIn]: (oldState, action) => ({ ...oldState, ...action.payload }),
  [actions.loggedOut]: (oldState, action) => initialState,
  [actions.setProfile]: (oldState, action) => ({ ...oldState, ...action.payload }),
});

// PROVIDER

// const store = createContext({});
// const { Provider } = store;
//
// const UserProvider = ({ children, initialState }) => {
//   const reducer = createReducer(initialState || {}, {
//     [actions.loggedIn]: (state, action) => { },
//     [actions.loggedOut]: (state, action) => initialState,
//     [actions.profile]: (state, action) => ({ ...state, ...action.payload }),
//   });
//   console.log('REDUCER', reducer);
//   return <Provider value={{ state: reducer.state, dispatch: reducer.dispatch }}>{children}</Provider>;
// };
//
// UserProvider.propTypes = {
//   children: PropTypes.element.isRequired,
//   initialState: PropTypes.shape({}),
// };
//
// UserProvider.defaultProps = {
//   initialState: {},
// };

// const useUserContext = () => useContext(store);

export {
  actions as userActions,
  reducer as userReducer,
};
