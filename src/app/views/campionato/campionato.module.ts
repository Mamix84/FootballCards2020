import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaricaCampionatoComponent } from './carica-campionato/carica-campionato.component';
import { GiocaCampionatoComponent } from './gioca-campionato/gioca-campionato.component';
import { NuovoCampionatoCasualeComponent } from './nuovo-campionato-casuale/nuovo-campionato-casuale.component';
import { NuovoCampionatoComponent } from './nuovo-campionato/nuovo-campionato.component';
import { WidgetModule } from 'src/app/widget/widget.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    NuovoCampionatoComponent,
    NuovoCampionatoCasualeComponent,
    CaricaCampionatoComponent,
    GiocaCampionatoComponent,
  ],
  imports: [CommonModule, FormsModule, WidgetModule, TableModule],
  exports: [
    NuovoCampionatoComponent,
    NuovoCampionatoCasualeComponent,
    CaricaCampionatoComponent,
    GiocaCampionatoComponent,
  ],
})
export class CampionatoModule {}
