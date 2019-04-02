import { Component, OnInit } from '@angular/core';
import {GithubRepositoryService} from '../sharedServices/githubRepository.service';
import {forkJoin, Observable} from 'rxjs';
import {Repository} from '../sharedModel/repository.model';

@Component({
  selector: 'app-list-repositories',
  templateUrl: './list-repositories.component.html',
  styleUrls: ['./list-repositories.component.css']
})
export class ListRepositoriesComponent implements OnInit {

  repositoriesList: Repository[] = [];
  nbrPage: number;

  constructor(private githubRepositoryService: GithubRepositoryService) {

  }

  ngOnInit(): void {
    this.githubRepositoryService.getNbrPage().subscribe(resp => {
      this.nbrPage = parseInt(resp.headers.get('link').substr(210, 2), 10);
      this.getRepositories();
    });
  }

  getRepositories() {
    const observables: Observable<any[]>[] = [];
    let list: any[] = [];
    const nbr = (this.nbrPage > 11) ? 11 : this.nbrPage;
    for (let i = 1; i < nbr; i++) {
      observables.push(this.githubRepositoryService.getRepositories(i));
    }
    forkJoin(observables)
      .subscribe(dataArray => {
        list = dataArray.map( page => page['items']);
        list = [].concat.apply([], list);
        console.log(list);
        list.forEach((res) => {
          const repository = new Repository (res['name'], res['description'], res['stargazers_count'],
            res['open_issues_count'], res['owner']['login'], res['owner']['avatar_url']);
          this.repositoriesList.push(repository);
        });
        console.log(this.repositoriesList);
      });
  }

}
