import { Injectable } from '@angular/core';
import { DatabaseService } from './database-service';
import { AngularFirestore } from '@angular/fire/firestore';
import { TipologiaTorneo, NumeroTeams } from '../model/dominio';
import { map } from 'rxjs/operators';
import { pipe, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TorneiDBService implements DatabaseService {
  constructor(private firestore: AngularFirestore) {}

  async readAll() {
    return await of(
      this.firestore.collection('tornei').snapshotChanges()
    ).toPromise();
  }

  async read(id: string) {
    return await of(this.firestore.doc('tornei/' + id).get()).toPromise();
  }

  create(object: any) {
    this.firestore.collection('tornei').add(object);
  }

  update(id: string, object: any) {
    this.firestore.doc('tornei/' + id).update(object);
  }

  delete(id: string) {
    this.firestore.doc('tornei/' + id).delete();
  }
}
