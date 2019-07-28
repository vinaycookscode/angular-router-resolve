import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserDataService} from './user-data.service';
import {IPost} from './IPost';

@Injectable()
export class UserPostsResolve implements Resolve<IPost[]> {
  constructor(private userDataService: UserDataService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<IPost[]> {
    return this.userDataService.getPosts();
  }
}
