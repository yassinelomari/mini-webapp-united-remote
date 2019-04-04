import {Component, OnInit} from '@angular/core';
import {GithubRepositoryService} from './sharedServices/githubRepository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-webapp-united-remote';

  /*constructor(private githubRepositoryService: GithubRepositoryService) {

  }

  ngOnInit(): void {
    this.githubRepositoryService.getUser().subscribe((value) => {
      console.log(value);
    });
  }*/
}
