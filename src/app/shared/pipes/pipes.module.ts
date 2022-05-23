import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe/safe.pipe';

const PIPES = [
  SafePipe
]

@NgModule({
  declarations: [
    ...PIPES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...PIPES
  ]
})
export class PipesModule { }
