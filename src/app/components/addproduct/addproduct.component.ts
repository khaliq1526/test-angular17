import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AntZorroModule } from '../../modules/ant-zorro.module';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule,AntZorroModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent {

  showErrors:boolean = false;
  isLoading:boolean= false;

  formData:any={
    productName:"",
    description:"",
    price:"",
    stock_quantity:""
    }

constructor(private productsService:ProductsService,private route:Router,private modalRef:NzModalRef){}

submitProduct(valid:boolean):any{
  if(!valid){
    this.showErrors=true;
    return;
  }

  this.isLoading=true;
  this.productsService.addProduct(this.formData).subscribe(response=>
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





