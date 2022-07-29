import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import store from './store/store';
import { Provider } from 'react-redux';
import { getToken } from './services/token';
import { thunkCheckToken } from './store/userSlice';
import { thunkFetchPlaces } from './store/placesSlice';

window.addEventListener('rejectionhandled', (evt) => {
  console.log('Non caught promise Error. Shame on me');
  console.log(evt.reason);
});

const start = async () => {
  const token = getToken();
  if (token) {
    await store.dispatch(thunkCheckToken());
  }
  await store.dispatch(thunkFetchPlaces());

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

start();
