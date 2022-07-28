import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import counter from './redux/counter';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
