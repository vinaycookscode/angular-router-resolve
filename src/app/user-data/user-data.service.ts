import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost} from './IPost';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {

  }


  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url);
  }
}
