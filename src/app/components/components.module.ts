import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';
import { IonicModule } from '@ionic/angular';
import { Tab1PageModule } from '../pages/tab1/tab1.module';



@NgModule({
  declarations: [
    ListsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ListsComponent
  ]

})
export class ComponentsModule { }
