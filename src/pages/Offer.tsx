import Logo from '../components/Logo/Logo';
import HeaderNav from '../components/HeaderNav/HeaderNav';
import Header from '../components/Header/Header';
import Gallery from '../components/Gallery/Gallery';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { selectPlaceById } from '../store/placesSlice';
import { AppRoute } from '../const';
import Mark from '../components/Mark/Mark';
import ButtonBookmark from '../components/ButtonBookmark/ButtonBookmark';
import Rating from '../components/Rating/Rating';
import Features from '../components/Features/Features';
import Price from '../components/Price/Price';
import PropertyInside from '../components/PropertyInside/PropertyInside';
import PropertyHost from '../components/PropertyHost/PropertyHost';
import PropertyReviews from '../components/PropertyReviews/PropertyReviews';
import Map from '../components/Map/Map';
import { mapPlaceToPoint } from '../utils';
import { useEffect, useState } from 'react';
import BackendApi from '../services/BackendApi/BackendApi';
import { Place } from '../types/models';
import { changeActiveFilter } from '../store/filtersSlice';
import Card from '../components/Card/Card';

const Offer = () => {
  const { id } = useParams();
  const place = useAppSelector(selectPlaceById(Number(id)));
  const [nearby, setNearby] = useState<Place[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (place) {
      dispatch(changeActiveFilter(place.city.name));
      new BackendApi().fetchNearbyPlaces(Number(id)).then((response) => setNearby(response.data));
    }
  }, [dispatch, id, place]);

  if (!place) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const selectedPoint = mapPlaceToPoint(place);
  const points = nearby.map((nearbyPlace) => mapPlaceToPoint(nearbyPlace)).concat(selectedPoint);

  return (
    <div className="page">
      <Header>
        <div className="header__left">
          <Logo />
        </div>
        <HeaderNav />
      </Header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <Gallery images={place.images} />
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <Mark baseClass="property" />
              <div className="property__name-wrapper">
                <h1 className="property__name">{place.title}</h1>
                <ButtonBookmark placeId={place.id} baseClass="property" size="medium" />
              </div>
              <Rating rating={place.rating} baseClass="property">
                <span className="property__rating-value rating__value">{place.rating}</span>
              </Rating>
              <Features placeType={place.type} bedrooms={place.bedrooms} adults={place.maxAdults} />
              <Price price={place.price} baseClass="property">
                <span className="property__price-text">&nbsp;night</span>
              </Price>
              <PropertyInside goods={place.goods} />
              <PropertyHost host={place.host} description={place.description} />
              <PropertyReviews placeId={place.id} />
            </div>
          </div>
          <Map className="property__map" points={points} selectedPoint={selectedPoint} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearby.map((item) => (
                <Card baseClass="near-places" key={item.id} placeId={item.id} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Offer;
