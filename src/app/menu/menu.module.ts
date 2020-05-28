import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, FormsModule, FieldsetModule, ButtonModule],
  exports: [MenuComponent],
})
export class MenuModule {}
