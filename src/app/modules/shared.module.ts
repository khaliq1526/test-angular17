import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { LeftMenuComponent } from '../components/left-menu/left-menu.component';
//Ant zorro
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { AntZorroModule } from './ant-zorro.module';


@NgModule({
  declarations: [HeaderComponent, LeftMenuComponent],
  imports: [

    CommonModule, RouterLink,AntZorroModule

  ],
  exports:[HeaderComponent, LeftMenuComponent,AntZorroModule]
})
export class SharedModule { }
