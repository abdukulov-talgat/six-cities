import { ApiRoute } from './../../const';
import http from './http';
import { UserCredentials, AuthInfo } from './../../types/models';


export default class BackendApi {

  async login(user: UserCredentials){
    return http.post<AuthInfo>(ApiRoute.Login, user);
  }

  async logout() {
    return http.delete(ApiRoute.Logout);
  }

  async checkToken() {
    return http.get<AuthInfo>(ApiRoute.CheckToken);
  }
}

