import { Injectable } from '@angular/core';
import { DatabaseService } from './database-service';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StagioniDBService implements DatabaseService {
  constructor(private firestore: AngularFirestore) {}

  async readAll() {
    return await of(
      this.firestore.collection('stagioni').snapshotChanges()
    ).toPromise();
  }

  async read(id: string) {
    return await of(this.firestore.doc('stagioni/' + id).get()).toPromise();
  }

  create(object: any) {
    this.firestore.collection('stagioni').add(object);
  }

  update(id: string, object: any) {
    this.firestore.doc('stagioni/' + id).update({ listaStagioni: object });
  }

  delete(id: string) {
    this.firestore.doc('stagioni/' + id).delete();
  }
}
