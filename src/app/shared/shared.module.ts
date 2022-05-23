import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';


const MODULES = [
  ComponentsModule,
  PipesModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES,
  ]
})
export class SharedModule { }
