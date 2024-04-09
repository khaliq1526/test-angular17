import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:5001/users').pipe(
      catchError(error => {
        console.log('Error occured in getUsers, error is ', error);
        return of([]);
      })
    );
  }
}
