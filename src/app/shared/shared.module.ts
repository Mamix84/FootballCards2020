import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WidgetModule } from '../widget/widget.module';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoginComponent, ErrorComponent],
  imports: [CommonModule, WidgetModule],
  exports: [HeaderComponent, FooterComponent, LoginComponent],
})
export class SharedModule {}
