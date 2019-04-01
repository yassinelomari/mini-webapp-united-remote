import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {GithubRepositoryService} from './sharedServices/githubRepository.service';
import { ListRepositoriesComponent } from './list-repositories/list-repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GithubRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
