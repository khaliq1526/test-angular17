import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared.module';
import { OrdersService } from '../../services/orders.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,SharedModule,RouterLink],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {

  orders:any =[]

  constructor(private ordersService:OrdersService,private http:HttpClient){

  }
  ngOnInit(): void {   
    this.ordersService.getOrders().subscribe(response => {
      this.orders = response;
    }); }

    deleteByID(orderID:String){

      return this.ordersService.deleteBYID(orderID).subscribe(response=>{
        this.orders=response;
      });}
}


