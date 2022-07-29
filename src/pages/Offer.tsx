import Logo from '../components/Logo/Logo';
import HeaderNav from '../components/HeaderNav/HeaderNav';
import Header from '../components/Header/Header';
import Gallery from '../components/Gallery/Gallery';
import { Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
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

const Offer = () => {
  const { id } = useParams();
  const place = useAppSelector(selectPlaceById(Number(id)));

  if (!place) {
    return <Navigate to={AppRoute.NotFound} />;
  }

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
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;80</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button
                      className="place-card__bookmark-button place-card__bookmark-button--active button"
                      type="button"
                    >
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '80%' }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Private room</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      className="place-card__image"
                      src="img/apartment-02.jpg"
                      width="260"
                      height="200"
                      alt="Place image"
                    />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;132</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '80%' }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      className="place-card__image"
                      src="img/apartment-03.jpg"
                      width="260"
                      height="200"
                      alt="Place image"
                    />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;180</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '100%' }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Offer;
