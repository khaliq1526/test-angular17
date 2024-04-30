import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared.module';
import { ProductsService } from '../../services/products.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddproductComponent } from '../addproduct/addproduct.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, SharedModule,RouterLink,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: any = [];
  
  
  constructor(private productsService: ProductsService,private modal:NzModalService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productsService
      .getProducts()
      .subscribe((response) => { 
        this.products = response;
      });

  }
  
  openProductModal():any{
    const modal = this.modal.create({
      nzTitle: 'Add New Product',
      nzContent: AddproductComponent,
      nzFooter: null

  })};

  deleteByID(productId:String){
    this.productsService.deleteByID(productId).subscribe((response)=>{
      this.products=response;
    });}
}
