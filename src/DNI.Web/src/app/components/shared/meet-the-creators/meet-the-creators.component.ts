import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { DataService } from 'app/services/data/data.service';
import { Creator } from 'app/model/creator';
import { of, throwError } from 'rxjs';

@Component({
  selector: 'dni-meet-the-creators',
  templateUrl: './meet-the-creators.component.html',
  styleUrls: ['./meet-the-creators.component.scss']
})
export class MeetTheCreatorsComponent implements OnInit {

  public creators: Creator[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService
      .creators()
      .pipe(catchError(err => {
        console.log(err);
        return throwError(err);
      }))
      .subscribe(creators => {
        this.creators = creators.sort(() => .5 - Math.random());
      });
  }

}
