import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';

import { CardComponent } from './card/card.component';
import { EventoComponent } from './evento/evento.component';
import { ClassificaComponent } from './classifica/classifica.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GiornataComponent } from './giornata/giornata.component';
import { StatisticheComponent } from './statistiche/statistiche.component';
import { TabelloneComponent } from './tabellone/tabellone.component';

@NgModule({
  declarations: [
    CardComponent,
    EventoComponent,
    ClassificaComponent,
    HeaderComponent,
    FooterComponent,
    GiornataComponent,
    StatisticheComponent,
    TabelloneComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CheckboxModule,
    TableModule,
    FieldsetModule,
    ButtonModule,
    DialogModule,
    ChartModule,
    DropdownModule,
    TieredMenuModule,
    TooltipModule,
    ScrollPanelModule,
    OrganizationChartModule,
    FileUploadModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    EventoComponent,
    ClassificaComponent,
    GiornataComponent,
    StatisticheComponent,
    TabelloneComponent,
  ],
  providers: [MessageService],
})
export class ShareModule {}
