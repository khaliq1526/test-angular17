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
    return this.http.get('http://localhost:5000/users').pipe(
      catchError(error => {
        console.log('Error occured in getUsers, error is ', error);
        return of([]);
      })
    );
  }

  submitFormData(formData: any): Observable<any> {
    return this.http.post<any>('http://localhost:5000/users', formData).pipe(
      catchError(error => {
        console.log('Error occured in submitFormData, error is ', error);
        return of([]);
      })
    );
  }

  deleteByID(id:String):Observable<any> {
    return this.http.delete<any>('http://localhost:5000/users/'+id).pipe(
      catchError(error => {
        console.log('Error occured in deleteBYID, error is ', error);
        return of([]);
      })
    );
  }
}
