import {Component, Input, OnInit} from '@angular/core';
import {Repository} from '../../sharedModel/repository.model';
import { faStar, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  @Input() rep: Repository;
  nbrDays: number;

  faStar = faStar;
  faExclamationCircle = faExclamationCircle;

  constructor() { }

  ngOnInit() {
    /**************************************************************************/
    /*    calculate the number of days between date of submission and today   */
    /**************************************************************************/
    const submittedDate = this.rep.getSubmittedDate();
    const dateNow = new Date();
    const diff = dateNow.getTime() - submittedDate.getTime();
    this.nbrDays = diff / (1000 * 3600 * 24);
  }

}
