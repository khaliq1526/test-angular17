import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {
    return this.http.get('http://localhost:5000/orders').pipe(
      catchError(error => {
        console.log('Error occured in getOrders, error is ', error);
        return of([]);
      })
    );
}
}
