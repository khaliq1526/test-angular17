import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { LeftMenuComponent } from '../components/left-menu/left-menu.component';
import{RouterLink} from '@angular/router'

@NgModule({
  declarations: [HeaderComponent, LeftMenuComponent],
  imports: [
    CommonModule,RouterLink
  ],
  exports:[HeaderComponent, LeftMenuComponent]
})
export class SharedModule { }
