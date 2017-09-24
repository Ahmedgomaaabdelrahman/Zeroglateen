import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigntypesPage } from './signtypes';

@NgModule({
  declarations: [
    SigntypesPage,
  ],
  imports: [
    IonicPageModule.forChild(SigntypesPage),
  ],
})
export class SigntypesPageModule {}
