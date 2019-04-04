import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {GithubRepositoryService} from './sharedServices/githubRepository.service';
import { ListRepositoriesComponent } from './list-repositories/list-repositories.component';
import { RepositoryComponent } from './list-repositories/repository/repository.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ListRepositoriesComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [GithubRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
