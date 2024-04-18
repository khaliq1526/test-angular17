import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent {

  formData:any={
    productName:"",
    description:"",
    price:"",
    stock_quantity:""
    }

constructor(private productsService:ProductsService,private route:Router){}

submitProduct():any{
  this.productsService.addProduct(this.formData).subscribe(response=>{

    this.route.navigate(['/products']);
  })
}


}
