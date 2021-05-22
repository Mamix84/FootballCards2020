import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { DatabaseService } from './database-service';

@Injectable({
  providedIn: 'root',
})
export class FormatDbService implements DatabaseService{
  constructor(private firestore: AngularFirestore) {}

  async readAll() {
    return await of(
      this.firestore.collection('format').snapshotChanges()
    ).toPromise();
  }

  async readAllByFilters(tipologiaTorneo: number, numeroTeams: string) {
    return await of(
      this.firestore
        .collection('format', (ref) =>
          ref
            .where('tipologiaTorneo', '==', tipologiaTorneo)
            .where('numeroTeams', '==', numeroTeams + '')
        )
        .snapshotChanges()
    ).toPromise();
  }

  read(id: string) {
    this.firestore.doc('format/' + id).get();
  }

  create(object: any) {
    this.firestore.collection('format').add(object);
  }

  update(id: string, object: any) {
    this.firestore.doc('format/' + id).update(object);
  }

  delete(id: string) {
    this.firestore.doc('format/' + id).delete();
  }
}
