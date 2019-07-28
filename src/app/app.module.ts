import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import {UserDataService} from './user-data/user-data.service';
import {UserPostsResolve} from './user-data/user-data-resolve';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserDataService,
    UserPostsResolve  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
