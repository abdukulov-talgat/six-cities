import { ApiRoute } from '../../const';
import http from './http';
import { UserCredentials, AuthInfo, Place, ReviewGet, ReviewPost } from '../../types/models';

export default class BackendApi {
  //User
  async login(user: UserCredentials) {
    return http.post<AuthInfo>(ApiRoute.Login, user);
  }

  async logout() {
    return http.delete(ApiRoute.Logout);
  }

  async checkToken() {
    return http.get<AuthInfo>(ApiRoute.CheckToken);
  }

  //Places
  async fetchPlaces() {
    return http.get<Place[]>(ApiRoute.Places);
  }

  async changeFavoriteStatus(id: number, status: boolean) {
    return http.post<Place>(`${ApiRoute.ChangeFavoriteStatus}/${id}/${Number(status)}`);
  }

  async fetchNearbyPlaces(id: number) {
    return http.get<Place[]>(`${ApiRoute.Places}/${id}/nearby`);
  }

  async fetchFavoritePlaces() {
    return http.get<Place[]>(ApiRoute.FavoritePlaces);
  }

  //Reviews
  async fetchReviews(id: number) {
    return http.get<ReviewGet[]>(`${ApiRoute.Reviews}/${id}`);
  }

  async saveReview(id: number, review: ReviewPost) {
    return http.post<ReviewGet[]>(`${ApiRoute.Reviews}/${id}`, review);
  }
}
