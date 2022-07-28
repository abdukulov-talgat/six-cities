import Header from '../components/Header/Header';
import HeaderNav from '../components/HeaderNav/HeaderNav';
import Logo from '../components/Logo/Logo';
import Tabs from '../components/Tabs/Tabs';
import Places from '../components/Places/Places';
import { useAppSelector } from '../hooks/hooks';
import { selectFilteredAndSortedPlaces } from '../store/placesSlice';
import NoPLaces from '../components/NoPlaces/NoPLaces';
import Map from '../components/Map/Map';
import { mapPlaceToPoint } from '../utils';
import { selectHoveredPlace } from '../store/hoveredPlaceSlice';

const Main = () => {
  const places = useAppSelector(selectFilteredAndSortedPlaces); //Filtered and sorted
  const selectedPoint = useAppSelector(selectHoveredPlace);

  const mainClasses =
    places.length > 0 ? 'page__main page__main--index' : 'page__main page__main--index page__main--index-empty';
  const containerClasses =
    places.length > 0
      ? 'cities__places-container container'
      : 'cities__places-container container cities__places-container--empty';

  return (
    <div className="page page--gray page--main">
      <Header>
        <div className="header__left">
          <Logo isActive />
        </div>
        <HeaderNav />
      </Header>

      <main className={mainClasses}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className={containerClasses}>
            {places.length > 0 ? <Places /> : <NoPLaces />}
            <div className="cities__right-section">
              <Map
                className="cities__map"
                points={places.map((place) => mapPlaceToPoint(place))}
                selectedPoint={selectedPoint}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
