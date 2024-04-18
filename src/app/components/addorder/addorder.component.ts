import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-addorder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addorder.component.html',
  styleUrl: './addorder.component.scss'
})
export class AddorderComponent {

  formData= {
    userID:"",
    orderDate:"",
    totalAmount: "",
    orderStatus:""

  }

  constructor(private ordersService:OrdersService,private route:Router){}

  submitOrder():any{
    this.ordersService.addOrders(this.formData).subscribe(response=>{
      
        this.route.navigate(['/orders']);
      
    });
  }

 
}
