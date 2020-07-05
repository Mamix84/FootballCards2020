import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumeroTeamsDbService {
  constructor(private firestore: AngularFirestore) {}

  async readAll() {
    return await of(
      this.firestore.collection('numeroTeams').snapshotChanges()
    ).toPromise();
  }

  async readAllByTipologiaTorneo(tipologiaTorneo: number) {
    return await of(
      this.firestore
        .collection('numeroTeams', (ref) =>
          ref.where('tipologiaTorneo', '==', tipologiaTorneo)
        )
        .snapshotChanges()
    ).toPromise();
  }

  read(id: string) {
    this.firestore.doc('numeroTeams/' + id).get();
  }

  create(object: any) {
    this.firestore.collection('numeroTeams').add(object);
  }

  update(id: string, object: any) {
    this.firestore.doc('numeroTeams/' + id).update(object);
  }

  delete(id: string) {
    this.firestore.doc('numeroTeams/' + id).delete();
  }
}
