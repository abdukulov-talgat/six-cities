import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../../pages/Main';
import Login from '../../pages/Login';
import Offer from '../../pages/Offer';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Favorites from '../../pages/Favorites';
import NotFound from '../../pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Home} element={<Main />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Offer} element={<Offer />} />
      <Route element={<PrivateRoute />}>
        <Route path={AppRoute.Favorites} element={<Favorites />} />
      </Route>
      <Route path={AppRoute.NotFound} element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
