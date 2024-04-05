import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users = [
    {
      id:1,
      name: 'Tom',
      mobile: '1234',
      city:'city 1',
      email:'ab@cd.com',
      status: 'Active'
    },
    {
      id:2,
      name: 'Harry',
      mobile: '7860',
      city:'city 2',
      email:'xy@cd.com',
      status: 'Pending'
    },
    {
      id:3,
      name: 'Majnu',
      mobile: '73838',
      city:'city 3',
      email:'abc@gmail.com',
      status: 'Active'
    },
    {
      id:4,
      name: 'Mahesh',
      mobile: '7860',
      city:'city 2',
      email:'xy@cd.com',
      status: 'Pending'
    },
    {
      id:1,
      name: 'Tom',
      mobile: '1234',
      city:'city 1',
      email:'ab@cd.com',
      status: 'Active'
    },
    {
      id:2,
      name: 'Harry',
      mobile: '7860',
      city:'city 2',
      email:'xy@cd.com',
      status: 'Pending'
    },
    {
      id:3,
      name: 'Majnu',
      mobile: '73838',
      city:'city 3',
      email:'abc@gmail.com',
      status: 'Active'
    },
    {
      id:4,
      name: 'Mahesh',
      mobile: '7860',
      city:'city 2',
      email:'xy@cd.com',
      status: 'Pending'
    },
    {
      id:1,
      name: 'Tom',
      mobile: '1234',
      city:'city 1',
      email:'ab@cd.com',
      status: 'Active'
    },
    {
      id:2,
      name: 'Harry',
      mobile: '7860',
      city:'city 2',
      email:'xy@cd.com',
      status: 'Pending'
    },
    {
      id:3,
      name: 'Majnu',
      mobile: '73838',
      city:'city 3',
      email:'abc@gmail.com',
      status: 'Active'
    },
    {
      id:4,
      name: 'Mahesh',
      mobile: '7860',
      city:'city 2',
      email:'xy@cd.com',
      status: 'Pending'
    },
    {
      id:1,
      name: 'Tom',
      mobile: '1234',
      city:'city 1',
      email:'ab@cd.com',
      status: 'Active'
    },
    {
      id:2,
      name: 'Harry',
      mobile: '7860',
      city:'city 2',
      email:'xy@cd.com',
      status: 'Pending'
    },
    {
      id:3,
      name: 'Majnu',
      mobile: '73838',
      city:'city 3',
      email:'abc@gmail.com',
      status: 'Active'
    },
    {
      id:4,
      name: 'Mahesh',
      mobile: '7860',
      city:'city 2',
      email:'xy@cd.com',
      status: 'Pending'
    },{
      id:1,
      name: 'Tom',
      mobile: '1234',
      city:'city 1',
      email:'ab@cd.com',
      status: 'Active'
    },
    {
      id:2,
      name: 'Harry',
      mobile: '7860',
      city:'city 2',
      email:'xy@cd.com',
      status: 'Pending'
    },
    {
      id:3,
      name: 'Majnu',
      mobile: '73838',
      city:'city 3',
      email:'abc@gmail.com',
      status: 'Active'
    },
    {
      id:4,
      name: 'Mahesh',
      mobile: '7860',
      city:'city 2',
      email:'xy@cd.com',
      status: 'Pending'
    },
    {
      id:1,
      name: 'Tom',
      mobile: '1234',
      city:'city 1',
      email:'ab@cd.com',
      status: 'Active'
    },
    {
      id:2,
      name: 'Harry',
      mobile: '7860',
      city:'city 2',
      email:'xy@cd.com',
      status: 'Pending'
    },
    {
      id:3,
      name: 'Majnu',
      mobile: '73838',
      city:'city 3',
      email:'abc@gmail.com',
      status: 'Active'
    },
    {
      id:4,
      name: 'Mahesh',
      mobile: '7860',
      city:'city 2',
      email:'xy@cd.com',
      status: 'Pending'
    }
  ];

}
