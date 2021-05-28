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

@NgModule({
  declarations: [],
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
  ],
  exports: [
    Button,
    TieredMenu,
    Fieldset,
    Dropdown,
    Dialog,
    SelectButton,
    Table,
  ],
})
export class WidgetModule {}
