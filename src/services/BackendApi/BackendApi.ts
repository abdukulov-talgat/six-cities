import { ApiRoute } from '../../const';
import http from './http';
import { UserCredentials, AuthInfo, Place, ReviewGet } from '../../types/models';

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

  //Reviews
  async fetchReviews(id: number) {
    return http.get<ReviewGet[]>(`${ApiRoute.Reviews}/${id}`);
  }
}
