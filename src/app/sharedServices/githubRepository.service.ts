import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Repository} from '../sharedModel/repository.model';
import {Observable} from 'rxjs';


@Injectable()
export class GithubRepositoryService {
  // listRepository: Repository[] = [];
  // username = 'yassinelomari';
  clientId = '2d3df2f0bc05f93eca08';
  clientSecret = '4df21c172dbcc5e623a2ea5931eab2f343f91f4d';
  private url = 'https://api.github.com/search/repositories?&q=created:>';
  // 2018-02-28&sort=stars&order=desc';
  // ?access_token=af435b3ab34e0b0c5c214dfd9a777606f8fd52a7

  constructor(private http: HttpClient) {
    const d = new Date();
    d.setDate(d.getDate() - 30);
    const month = (d.getMonth() / 10 >= 1) ? d.getMonth() : '0' + d.getMonth();
    const day = (d.getDate() / 10 >= 1) ? d.getDate() : '0' + d.getDate();
    const year = (d.getFullYear() / 10 >= 1) ? d.getFullYear() : '0' + d.getFullYear();
    // console.log(d);
    const lastMonthyear = year + '-' + month + '-' + day;
    this.url += lastMonthyear + '&sort=stars&order=desc';
    console.log(this.url);

  }

  /*getUser() {
    return this.http.get('https://api.github.com/users/' + this.username +
      '?client_id=' + this.clientId + '&client_secret=' + this.clientSecret);
  }*/

  public getNbrPage(): Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(this.url, { observe: 'response' });
  }

  public getRepositories(page: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + '&page=' + page + '&per_page=100' +
      '&client_id=' + this.clientId + '&client_secret=' + this.clientSecret);
  }
}
