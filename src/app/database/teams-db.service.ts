import { Injectable } from '@angular/core';
import { DatabaseService } from './database-service';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamsDBService implements DatabaseService {
  constructor(private firestore: AngularFirestore) {}

  async readAll() {
    return await of(
      this.firestore.collection('teams').snapshotChanges()
    ).toPromise();
  }

  async read(id: string) {
    return await of(this.firestore.doc('teams/' + id).get()).toPromise();
  }

  create(object: any) {
    this.firestore.collection('teams').add(object);
  }

  update(id: string, object: any) {
    this.firestore.doc('teams/' + id).update(object);
  }

  delete(id: string) {
    this.firestore.doc('teams/' + id).delete();
  }
}
