import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.scss'
})
export class AdduserComponent {

  formData:any= {
    ID:"",
    NAME:"",
    MOBILE:"",
    EMAIL:"",
    STATUS:""
 }

constructor(private usersService:UsersService,private route:Router){}
  
submitUser():any{
    this.usersService.submitFormData(this.formData).subscribe(response=>
      {
        this.route.navigate(['/users']);
      }
    )
   }

}
