export enum AppRoute {
  Home = '/',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/notfound',
}

export enum ApiRoute {
  Login = '/login',
  CheckToken = '/login',
  Logout = '/logout',
  Places = '/hotels',
  ChangeFavoriteStatus = '/favorite',
  Offer = '/offer',
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const enum SortType {
  Popular = 'Popular',
  LowToHigh = 'LowToHigh',
  HighToLow = 'HighToLow',
  TopRated = 'TopRated',
}

export enum PlaceType {
  Apartment = 'Apartment',
  Room = 'Private Room',
  House = 'House',
  Hotel = 'Hotel',
}

export const CityCoordinates = {
  [CityName.Paris]: {
    lat: 48.85661,
    lng: 2.351499,
  },
  [CityName.Cologne]: {
    lat: 50.938361,
    lng: 6.959974,
  },
  [CityName.Hamburg]: {
    lat: 53.550341,
    lng: 10.000654,
  },
  [CityName.Brussels]: {
    lat: 50.846557,
    lng: 4.351697,
  },
  [CityName.Amsterdam]: {
    lat: 52.37454,
    lng: 4.897976,
  },
  [CityName.Dusseldorf]: {
    lat: 51.225402,
    lng: 6.776314,
  },
} as const;

export type Point = {
  lat: number;
  lng: number;
};

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
