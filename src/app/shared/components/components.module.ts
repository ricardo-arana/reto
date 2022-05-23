import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';

const COMPONENTS = [
  LoadingComponent,
  NavbarComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
  ]
})
export class ComponentsModule { }
