import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class GithubRepositoryService {

  clientId = '2d3df2f0bc05f93eca08';
  clientSecret = '4df21c172dbcc5e623a2ea5931eab2f343f91f4d';
  private url = 'https://api.github.com/search/repositories?&q=created:>';


  constructor(private http: HttpClient) {
    /********************************************************************************/
    /*              calculate date of today - 30 and prepare URL                    */
    /********************************************************************************/
    const d = new Date();
    d.setDate(d.getDate() - 30);
    const month = (d.getMonth() / 10 >= 1) ? d.getMonth() : '0' + d.getMonth();
    const day = (d.getDate() / 10 >= 1) ? d.getDate() : '0' + d.getDate();
    const year = (d.getFullYear() / 10 >= 1) ? d.getFullYear() : '0' + d.getFullYear();
    const lastMonthyear = year + '-' + month + '-' + day;
    this.url += lastMonthyear + '&sort=stars&order=desc';

  }

  /********************************************************************************/
  /*                   get response to get number of page                         */
  /********************************************************************************/
  public getNbrPage(): Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(this.url, { observe: 'response' });
  }

  /********************************************************************************/
  /*                     get 100 Repositories per page                            */
  /********************************************************************************/
  public getRepositories(page: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + '&page=' + page + '&per_page=100' +
      '&client_id=' + this.clientId + '&client_secret=' + this.clientSecret);
  }
}
