import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable, throwError,of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{


    return this.http.get('http://localhost:5000/products').pipe(
      catchError(error => {
          console.log("Error occured in getProducts,error is ",error);
          return of([])
      })
    )

    
  
  }
}
