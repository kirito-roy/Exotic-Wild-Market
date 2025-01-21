import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDTO } from '../dto/student';
// import { json } from 'body-parser';

@Injectable({
  providedIn: 'root'
})
export class Test1Service {
  private apiUrl = 'https://api-wild-market.roy184433.workers.dev/api/';

  constructor(private http: HttpClient) { }

  getStudent(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'student');
  }

  setStudent(student: any): Observable<any> {
    const data = JSON.stringify(student);
    // console.log(data);
    return this.http.post<any>(`${this.apiUrl}student`, student, );
  }
}
