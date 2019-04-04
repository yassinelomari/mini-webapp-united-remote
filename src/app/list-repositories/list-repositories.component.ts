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
    /**************************************************************************/
    /*              get the numbre of json pages from response                */
    /**************************************************************************/
    this.githubRepositoryService.getNbrPage().subscribe(resp => {
      this.nbrPage = parseInt(resp.headers.get('link').substr(210, 2), 10);
      this.getRepositories();
    });
  }

  /***************************************************************************************/
  /*          get Repositories with joining all observables and subscribe                */
  /*       the GitHub Search API provides up to 1000 results for each search             */
  /*       so if  pages are more than 11 (1000  results) I would change it to 11         */
  /***************************************************************************************/
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
        list.forEach((res) => {
          const repository = new Repository (res['name'], res['description'], res['stargazers_count'],
            res['open_issues_count'], res['owner']['login'], res['owner']['avatar_url'],new Date(res['updated_at']));
          this.repositoriesList.push(repository);
        });
        console.log(this.repositoriesList);
      });
  }

}
