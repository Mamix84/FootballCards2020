import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { WidgetModule } from 'src/app/widget/widget.module';
import { CampionatoModule } from '../campionato/campionato.module';
import { StagioneModule } from '../stagione/stagione.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, WidgetModule, CampionatoModule, StagioneModule],
  exports: [MenuComponent],
})
export class MenuModule {}
