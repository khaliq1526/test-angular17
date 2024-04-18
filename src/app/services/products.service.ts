import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable, throwError,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get('http://localhost:5000/products').pipe(
      catchError(error => {
          console.log("Error occured in getProducts,error is ",error);
          return of([]);
      })
    );}

  addProduct(formData:any):Observable<any>{
    return this.http.post<any>('http://localhost:5000/products',formData).pipe(
      catchError(error=>{
        console.log("Error occured in addProduct,error is" ,error);
        return of([]);
      })
    );}

  deleteByID(productId:String):Observable<any>{
    return this.http.delete('http://localhost:5000/products/' +productId).pipe(
      catchError(error=>{
        console.log("Error occured in deleteByID ,error is ",error);
        return of([]);
      })
    );}
}
