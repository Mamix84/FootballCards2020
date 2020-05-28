import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuovaCoppaComponent } from './nuova-coppa/nuova-coppa.component';
import { GiocaCoppaComponent } from './gioca-coppa/gioca-coppa.component';
import { CaricaCoppaComponent } from './carica-coppa/carica-coppa.component';
import { NuovaCoppaCasualeComponent } from './nuova-coppa-casuale/nuova-coppa-casuale.component';



@NgModule({
  declarations: [NuovaCoppaComponent, GiocaCoppaComponent, CaricaCoppaComponent, NuovaCoppaCasualeComponent],
  imports: [
    CommonModule
  ],
  exports: [NuovaCoppaComponent, GiocaCoppaComponent, CaricaCoppaComponent, NuovaCoppaCasualeComponent],
})
export class CoppaModule { }
