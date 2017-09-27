import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './index';
import TestComp from './component';
import { store } from './store/store';

// eslint-disable-next-line no-undef
const app = document.getElementById('app');

render(
  <Provider store={store}>
    <div>
      <App />
      <TestComp />
    </div>
  </Provider>,
  app
);
