import { CityName, mapPlaceTypeToName } from '../const';

export type AuthInfo = {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
  isPro: boolean;
  token: string;
};

export type UserCredentials = {
  email: string;
  password: string;
};

export type Place = {
  id: number;
  title: string;
  type: PlaceType;
  city: City;
  bedrooms: number;
  description: string;
  goods: string[];
  host: User;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
};

export type City = {
  name: CityName;
  location: Location;
};

export type User = Omit<AuthInfo, 'email' | 'token'>;

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type PlaceType = 'apartment' | 'room' | 'house' | 'hotel';

export type ReviewPost = {
  comment: string;
  rating: number;
};

export type ReviewGet = {
  id: number;
  date: string;
  user: User;
} & ReviewPost;
