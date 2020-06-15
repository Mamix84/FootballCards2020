import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShareModule } from './share/share.module';
import { MenuModule } from './menu/menu.module';
import { CampionatoModule } from './campionato/campionato.module';
import { StagioneModule } from './stagione/stagione.module';
import { CoppaModule } from './coppa/coppa.module';
import { CarrieraModule } from './carriera/carriera.module';
import { GestioneStagioniModule } from './gestione-stagioni/gestione-stagioni.module';
import { ConfiguratoreModule } from './configuratore/configuratore.module';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShareModule,
    CampionatoModule,
    StagioneModule,
    CoppaModule,
    CarrieraModule,
    MenuModule,
    GestioneStagioniModule,
    ConfiguratoreModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
