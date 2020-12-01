import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { readLocalStorage } from '../app.module';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  api_ref: string = environment.API_URL;
  constructor(private httpClient: HttpClient) {
  }

  public getUserData(): any {
    const user = readLocalStorage('user_data');
    return JSON.parse(user);
  }
}
