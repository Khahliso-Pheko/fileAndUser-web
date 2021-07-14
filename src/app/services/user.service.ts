import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from '../models/user.model'


@Injectable({
  providedIn: 'root'
})

export class UserService {


  constructor(private http: HttpClient) { }
  userUrl: string = "http://localhost:3000/users";

  getAllUsers(){
    return this.http.get<User[]>(this.userUrl);

  }
  adduser(user: User){
    return this.http.post(this.userUrl, user,{ ...Option, responseType: 'text' });
  }
  getUserById(id: Number){
    return this.http.get<User[]>(this. userUrl + '/' + id);
  }
  deleteUser(id: Number){
    return this.http.delete(this. userUrl + '/' + id,{ ...Option, responseType: 'text' });
  }
  updateUser(user: User){
    return this.http.put(this.userUrl,user,{ ...Option, responseType: 'text' });
  }
}