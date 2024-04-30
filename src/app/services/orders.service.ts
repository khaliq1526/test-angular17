import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from 'console';
import configs from '../environments/env';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  

  getOrders(): Observable<any> {
    return this.http.get(configs.apiURL+'/orders').pipe(
      catchError(error => {
        console.log('Error occured in getOrders, error is ', error);
        return of([]);
      })
    );}

    addOrders(formData:any):Observable<any>{
      return this.http.post<any>(configs.apiURL+'/orders',formData).pipe(
        catchError(error => {
          console.log('Error occured in addOrders, error is ', error);
          return of([]);
        })
      );}
    
    deleteBYID(orderID:String):Observable<any>{

      return this.http.delete<any>(configs.apiURL+'/orders/' +orderID).pipe(
        catchError(error => {
          console.log('Error occured in addOrders, error is ', error);
          return of([]);
        })
      );}
}
    
