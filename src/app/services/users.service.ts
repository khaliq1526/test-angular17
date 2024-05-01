import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import configs from '../environments/env';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  userObj: any;

  get editUserObj() {
    return this.userObj;
  }

  getUsers(): Observable<any> {
    return this.http.get(`${configs.apiURL}/users`).pipe(
      catchError(error => {
        console.log('Error occured in getUsers, error is ', error);
        return of([]);
      })
    );
  }

  submitFormData(formData: any): Observable<any> {
    if (formData._id) {
      return this.http.put<any>(configs.apiURL + '/users', formData).pipe(
        catchError(error => {
          console.log('Error occured in submitFormData, error is ', error);
          return of([]);
        })
      );
    } else {
      return this.http.post<any>(configs.apiURL + '/users', formData).pipe(
        catchError(error => {
          console.log('Error occured in submitFormData, error is ', error);
          return of([]);
        })
      );
    }
  }

  deleteByID(id: String): Observable<any> {
    return this.http.delete<any>(configs.apiURL + '/users/' + id).pipe(
      catchError(error => {
        console.log('Error occured in deleteBYID, error is ', error);
        return of([]);
      })
    );
  }
}
