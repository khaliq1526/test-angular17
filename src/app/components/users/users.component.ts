import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterLink } from '@angular/router';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

 users= [
    { 
      ID:1,
      NAME:'Tom',
      MOBILE:123,
      CITY:'Houston',
      EMAIL: '123@gmail.com',
      STATUS: 'Active'
  },
  { 
    ID:2,
    NAME:'Harry',
    MOBILE:456,
    CITY:'Hamshpire',
    EMAIL: '456@gmail.com',
    STATUS: 'Pending'
},
{ 
  ID:3,
  NAME:'Monty',
  MOBILE:789,
  CITY:'Holland',
  EMAIL: '789@gmail.com',
  STATUS: 'Active'
},
{ 
  ID:4,
  NAME:'Johnny',
  MOBILE:1011,
  CITY:'Hungary',
  EMAIL: '1011@gmail.com',
  STATUS: 'Active'
}
]

}
