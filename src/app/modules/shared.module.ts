import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

//Ant Zoro 
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { AntZorroModule } from './ant-zorro.module';


import { HeaderComponent } from '../components/header/header.component';
import { LeftMenuComponent } from '../components/left-menu/left-menu.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [HeaderComponent, LeftMenuComponent],
  imports: [
    CommonModule, RouterLink, AntZorroModule
  ],
  exports:[HeaderComponent, LeftMenuComponent, AntZorroModule],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ]
})
export class SharedModule { }
