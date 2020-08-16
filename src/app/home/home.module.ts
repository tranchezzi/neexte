import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import {InputMaskModule} from 'primeng/inputmask';
import {KeyFilterModule} from 'primeng/keyfilter';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InputMaskModule,
    KeyFilterModule,
    ButtonModule,
    FullCalendarModule,
    TableModule
  ]
})
export class HomeModule { }
