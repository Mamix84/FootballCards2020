import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, WidgetModule],
  exports: [MenuComponent],
})
export class MenuModule {}
