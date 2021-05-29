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

@NgModule({
  declarations: [
    StagioniComponent,
    TipologiaTorneoComponent
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
    StagioniComponent,
    TipologiaTorneoComponent
  ],
})
export class WidgetModule {}
