import HeaderNav from '../components/HeaderNav/HeaderNav';
import Logo from '../components/Logo/Logo';
import Header from '../components/Header/Header';
import { useEffect, useState } from 'react';
import BackendApi from '../services/BackendApi/BackendApi';
import { CityGroups, Place } from '../types/models';
import { AxiosError } from 'axios';
import { groupPlacesByCity } from '../utils';
import CityGroup from '../components/CityGroup/CityGroup';
import { CityName } from '../const';
import NoFavorite from '../components/Nofavorite/NoFavorite';
import Spinner from '../components/Spinner/Spinner';
import { notifyError } from '../services/notify';

const Favorites = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState<Place[]>([]);
  const groupedPlaces: CityGroups = groupPlacesByCity(places);

  useEffect(() => {
    setIsLoading(true);

    new BackendApi()
      .fetchFavoritePlaces()
      .then((response) => {
        setPlaces(response.data);
      })
      .catch((err: AxiosError) => {
        notifyError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <Header>
        <div className="header__left">
          <Logo />
        </div>
        <HeaderNav />
      </Header>

      <main
        className={
          places.length > 0 ? 'page__main page__main--favorites' : 'page__main page__main--favorites page__main--empty'
        }
      >
        <div className="page__favorites-container container">
          {isLoading ? (
            <div className="favorites__loading-box">
              <Spinner />
            </div>
          ) : (
            <section className={places.length > 0 ? 'favorites' : 'favorites favorites--empty'}>
              {places.length > 0 ? (
                <>
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    {Object.keys(groupedPlaces).map((cityName) => (
                      <CityGroup
                        key={cityName}
                        name={cityName as CityName}
                        places={groupedPlaces[cityName as CityName]}
                      />
                    ))}
                  </ul>
                </>
              ) : (
                <NoFavorite />
              )}
            </section>
          )}
        </div>
      </main>
      <footer className="footer container">
        <Logo variant="footer" />
      </footer>
    </div>
  );
};

export default Favorites;
