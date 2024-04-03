import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { LeftMenuComponent } from '../components/left-menu/left-menu.component';

@NgModule({
  declarations: [HeaderComponent, LeftMenuComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, LeftMenuComponent]
})
export class SharedModule { }
