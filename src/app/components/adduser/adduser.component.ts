import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AntZorroModule } from '../../modules/ant-zorro.module';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [FormsModule,NgIf,AntZorroModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.scss'
})
export class AdduserComponent {

  showErrors:boolean = false;
  isLoading:boolean= false;

  formData:any= {
  
    name:"",
    mobile:"",
    email:"",
    status:""
 }

constructor(private usersService:UsersService,
            private route:Router,
            private modalRef: NzModalRef){}
  
submitUser(valid:boolean):any{
  if(!valid){
    this.showErrors=true;
    return;
  } 
  this.isLoading=true;
  this.usersService.submitFormData(this.formData).subscribe(response=>
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
