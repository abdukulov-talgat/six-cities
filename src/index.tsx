import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import store from './store/store';
import { Provider } from 'react-redux';
import { getToken } from './services/token';
import { thunkCheckToken } from './store/userSlice';


window.addEventListener('rejectionhandled', (evt) => {
  console.log('Non caught promise Error. Shame on me');
  console.log(evt.reason);
});

const token = getToken();
if (token) {
  store.dispatch(thunkCheckToken());
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
