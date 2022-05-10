import { Injectable } from '@angular/core';
import { DatabaseService } from './database-service';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserSavesDBService implements DatabaseService {
  constructor(private firestore: AngularFirestore) {}

  async readAll() {
    return await of(
      this.firestore.collection('usersaves').snapshotChanges()
    ).toPromise();
  }

  async read(id: string) {
    return await of(this.firestore.doc('usersaves/' + id).get()).toPromise();
  }

  create(object: any) {
    this.firestore.collection('usersaves').add(object);
  }

  update(id: string, object: any) {
    this.firestore.doc('usersaves/' + id).update(object);
  }

  delete(id: string) {
    this.firestore.doc('usersaves/' + id).delete();
  }
}
