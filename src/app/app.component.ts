import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exampleObservable';

  ngOnInit() { }

  dataToShow: any[] = [];
  constructor(private http: HttpClient, private appService: AppService) {
    this.getData();
    this.getData2();
    this.dataToShow.push(this.getData3());
  }

  getData() {
    this.dataToShow.push(this.appService.fetchData());
  }

  getData2() {
    this.appService.getData().subscribe(
      (data: any) => {
        this.dataToShow.push(data);
      },
      (error: any) => {
        console.error('Error fetching data', error);
      }
    );
  }

  getData3() {
    return { message: 'Hello World2!' };
  }

}
