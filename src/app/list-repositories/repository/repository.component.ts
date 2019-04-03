import {Component, Input, OnInit} from '@angular/core';
import {Repository} from '../../sharedModel/repository.model';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  @Input() rep: Repository;
  nbrDays: number;

  constructor() { }

  ngOnInit() {
    const submittedDate = this.rep.getSubmittedDate();
    const dateNow = new Date();
    const diff = dateNow.getTime() - submittedDate.getTime();
    this.nbrDays = diff / (1000 * 3600 * 24);
  }

}
