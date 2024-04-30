import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';
import { AntZorroModule } from '../../modules/ant-zorro.module';
import { NzModalRef } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-addorder',
  standalone: true,
  imports: [FormsModule,AntZorroModule,NgIf],
  templateUrl: './addorder.component.html',
  styleUrl: './addorder.component.scss'
})
export class AddorderComponent {

  showErrors:boolean = false;
  isLoading:boolean= false;

  formData= {
    userID:"",
    orderDate:"",
    totalAmount: "",
    orderStatus:""

  }

  constructor(private ordersService:OrdersService,private route:Router,private modalRef:NzModalRef){}

  submitOrder(valid:boolean):any{

    if(!valid){
      this.showErrors=true;
      return;
    } 
    this.isLoading=true;
  this.ordersService.addOrders(this.formData).subscribe(response=>
      {
        //this.route.navigate(['/users']);
        this.modalRef.destroy(true);
      }
    )
  }
  handleCancel() {
    this.modalRef.destroy(false);
  }
 
}
