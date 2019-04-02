import {Component, Input, OnInit} from '@angular/core';
import {Repository} from '../../sharedModel/repository.model';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  @Input() rep: Repository;

  constructor() { }

  ngOnInit() {
  }

}
