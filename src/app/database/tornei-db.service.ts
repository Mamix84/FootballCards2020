import { Injectable } from '@angular/core';
import { DatabaseService } from './database-service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class TorneiDBService implements DatabaseService {
  constructor(private firestore: AngularFirestore) {}

  readAll() {
    return this.firestore.collection('tornei').snapshotChanges();
  }

  read(id: string) {
    this.firestore.doc('tornei/' + id).get();
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
