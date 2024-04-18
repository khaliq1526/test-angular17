import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { AppComponent } from './app.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AddorderComponent } from './components/addorder/addorder.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path:'addUser',
        component: AdduserComponent
    },
    {
        path:'addOrder',
        component: AddorderComponent
    },
    {
        path:'addProduct',
        component: AddproductComponent
    },

    {
        path:'',
        component: HomeComponent
    }    
];

