import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button, ButtonModule } from 'primeng/button';
import { TieredMenu, TieredMenuModule } from 'primeng/tieredmenu';
import { Fieldset, FieldsetModule } from 'primeng/fieldset';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { Dialog, DialogModule } from 'primeng/dialog';
import { SelectButton, SelectButtonModule } from 'primeng/selectbutton';
import { Table, TableModule } from 'primeng/table';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { Ripple, RippleModule } from 'primeng/ripple';
import { StagioniComponent } from './stagioni/stagioni.component';
import { TipologiaTorneoComponent } from './tipologia-torneo/tipologia-torneo.component';
import { NumeroSquadreComponent } from './numero-squadre/numero-squadre.component';
import { FormatComponent } from './format/format.component';
import { Divider, DividerModule } from 'primeng/divider';
import { CardComponent } from './card/card.component';
import { EventoComponent } from './evento/evento.component';
import { Tooltip, TooltipModule } from 'primeng/tooltip';
import { GiornataComponent } from './giornata/giornata.component';
import { Checkbox, CheckboxModule } from 'primeng/checkbox';
import { ClassificaComponent } from './classifica/classifica.component';
import { StatisticheComponent } from './statistiche/statistiche.component';
import { TabelloneComponent } from './tabellone/tabellone.component';
import {
  OrganizationChart,
  OrganizationChartModule,
} from 'primeng/organizationchart';
import { ScrollPanel, ScrollPanelModule } from 'primeng/scrollpanel';
import {ChartModule} from 'primeng/chart';
import { MessageService } from 'primeng/api';
import { TabPanel, TabView, TabViewModule } from 'primeng/tabview';
import { InputNumber, InputNumberModule } from 'primeng/inputnumber';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { TipologiaRisultatiComponent } from './tipologia-risultati/tipologia-risultati.component';

@NgModule({
  declarations: [
    StagioniComponent,
    TipologiaTorneoComponent,
    NumeroSquadreComponent,
    FormatComponent,
    CardComponent,
    EventoComponent,
    GiornataComponent,
    ClassificaComponent,
    StatisticheComponent,
    TabelloneComponent,
    TipologiaRisultatiComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TieredMenuModule,
    FieldsetModule,
    DropdownModule,
    DialogModule,
    SelectButtonModule,
    TableModule,
    InputTextModule,
    RippleModule,
    DividerModule,
    TooltipModule,
    CheckboxModule,
    OrganizationChartModule,
    ScrollPanelModule,
    ChartModule,
    TabViewModule,
    InputNumberModule,
    FileUploadModule
  ],
  exports: [
    InputText,
    Ripple,
    Button,
    TieredMenu,
    Fieldset,
    Dropdown,
    Dialog,
    SelectButton,
    Table,
    Divider,
    Tooltip,
    Checkbox,
    OrganizationChart,
    ScrollPanel,
    TabView,
    TabPanel,
    InputNumber,
    FileUpload,

    StagioniComponent,
    TipologiaTorneoComponent,
    NumeroSquadreComponent,
    FormatComponent,
    CardComponent,
    EventoComponent,
    GiornataComponent,
    ClassificaComponent,
    StatisticheComponent,
    TabelloneComponent,
    TipologiaRisultatiComponent
  ],
  providers: [MessageService]
})
export class WidgetModule {}
