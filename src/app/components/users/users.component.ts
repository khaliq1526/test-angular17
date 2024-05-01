import { Component, OnInit, OnChanges,SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared.module';
import { UsersService } from '../../services/users.service';
import { RouterLink } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AdduserComponent } from '../adduser/adduser.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, SharedModule,RouterLink, DatePipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{ 

  users:any = [];
 
  constructor(private userService: UsersService, private modal: NzModalService) {
  }

  ngOnInit(): void {   
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    });
  }
  deleteByID(id:String){
    this.userService. deleteByID(id).subscribe(response => {
      this.users = response;
    });    
  }

  openEditModal(user: any) {    
    this.openUserModal(user);
  }
    
  openUserModal(user:any = null) {
    this.userService.userObj = user ? {...user} : null;
    let modal = this.modal.create({
      nzTitle: user?._id ? 'Edit User': 'Add New User',
      nzContent: AdduserComponent,
      nzFooter: null
    });

    modal.afterClose.subscribe(result => {
      if(result) this.getUsers();
    })
  }
}
