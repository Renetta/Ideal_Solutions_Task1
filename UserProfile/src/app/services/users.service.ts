import { EventEmitter, Injectable } from '@angular/core';
import { users } from '../modals/users';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  fetchUsers() {
    return this.http.get<{[key: string]: users}>('./assets/data.json')
    .pipe(map((res) => {
      const users = [];
      for(const key in res) {
        if (res.hasOwnProperty(key)) {
          users.push({...res[key], id: key})
        }
      }
      return users;
    }));
  }

  onUserCLicked = new EventEmitter<users>()
  getUserDetails(user: users) {
    return this.onUserCLicked.emit(user);
  }
}
