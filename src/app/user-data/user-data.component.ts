import { Component, OnInit } from '@angular/core';
import {UserDataService} from './user-data.service';
import { ActivatedRoute } from '@angular/router';
import { IPost } from './IPost';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})

export class UserDataComponent implements OnInit {
  userPosts: IPost[] = [];

  constructor(private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.userPosts = this.route.snapshot.data.userPostsResolve;
    console.log(this.userPosts);
  }

}
