// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fas);
// library.add(fab);

// questi sostituiscono il deprecato @babel/polyfill
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'core-js/stable';
import React from 'react';
import { render } from 'react-dom';
import 'regenerator-runtime/runtime';
import App from './App';
import configureAppStore from './configureStore';
import './i18nextConf';
import { userActions } from './providers/UserProvider';

library.add(fas, fab);

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const store = configureAppStore();

// devo farlo così senza useDispatch() perché ancora non sono dentro il <Provider />
store.dispatch(userActions.setProfile(window.user));

render(<App store={store} />, document.getElementById('app'));
