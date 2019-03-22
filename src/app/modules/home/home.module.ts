import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './page/home.page';
import { HeaderComponent } from './components/header/header.component';
import {MaterialModule} from '../../shared/modules/material.module';

@NgModule({
    declarations: [HomePage, HeaderComponent],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class HomeModule { }
