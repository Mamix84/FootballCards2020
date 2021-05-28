import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShareModule } from './share/share.module';
import { StagioneModule } from './stagione/stagione.module';
import { CoppaModule } from './coppa/coppa.module';
import { CarrieraModule } from './carriera/carriera.module';
import { GestioneStagioniModule } from './gestione-stagioni/gestione-stagioni.module';
import { ConfiguratoreModule } from './configuratore/configuratore.module';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ViewsModule } from './views/views.module';
import { WidgetModule } from './widget/widget.module';
import { SharedModule } from './shared/shared.module';
import { CampionatoModule } from './views/campionato/campionato.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShareModule,
    StagioneModule,
    CoppaModule,
    CarrieraModule,
    GestioneStagioniModule,
    ConfiguratoreModule,
    ViewsModule,
    WidgetModule,
    SharedModule,
    CampionatoModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
