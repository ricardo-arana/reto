import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesComponent } from './agencies.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AgenciesComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule,
    SharedModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class AgenciesModule { }
