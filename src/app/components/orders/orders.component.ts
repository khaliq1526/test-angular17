import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared.module';
import { OrdersService } from '../../services/orders.service';
import { RouterLink } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AddorderComponent } from '../addorder/addorder.component';



@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,SharedModule,RouterLink],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {

  orders:any =[]

  constructor(private ordersService:OrdersService,private modal:NzModalService){

  }
  ngOnInit(): void {   
    this.getOrders();
    }; 

    getOrders() {
      this.ordersService.getOrders().subscribe(response => {
        this.orders = response;
      });
    }

    deleteByID(orderID:String){

      return this.ordersService.deleteBYID(orderID).subscribe(response=>{
        this.orders=response;
      });}

      openOrderModal() {
        const modal = this.modal.create({
          nzTitle: 'Add New Order',
          nzContent: AddorderComponent,
          nzFooter: null
        });
    
        modal.afterClose.subscribe(result => {
          if(result) this.getOrders();
        })
      }
}


