import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'http://localhost:8080/get';
  constructor(private http: HttpClient) { }

  getData(): Observable<Student[]> {
    return this.http.get<any>('http://localhost:8080/get');
  }

  fetchData() {
    return fetch('http://localhost:8080/get')
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching data', error);
        throw error;
      });
  }


}
