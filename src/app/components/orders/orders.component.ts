import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared.module';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {

  orders:any =[]

  constructor(private ordersService:OrdersService){

  }
  ngOnInit(): void {   
    this.ordersService.getOrders().subscribe(response => {
      this.orders = response;
    }); 
    
  }

}
