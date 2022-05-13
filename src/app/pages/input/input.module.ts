import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputPageRoutingModule } from './input-routing.module';

import { InputPage } from './input.page';
import { ModalPage } from './modal.page';
import { PlayquizComponent } from '../input/playquiz/playquiz.component';

// import { Animation, AnimationController } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, InputPageRoutingModule],
  declarations: [InputPage, ModalPage, PlayquizComponent],
  // entryComponents: [ModalPage],
})
export class InputPageModule {}
