import { Component, OnInit, OnChanges,SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared.module';
import { UsersService } from '../../services/users.service';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, SharedModule,RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{ 

  users:any = [];
 
  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {   
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    }); 
  }
  deleteByID(ID:String){
    this.userService. deleteByID(ID).subscribe(response => {
      this.users = response;
    });
    
  }
    
 

 

}
