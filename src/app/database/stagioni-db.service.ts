import { Injectable } from '@angular/core';
import { DatabaseService } from './database-service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class StagioniDBService implements DatabaseService {
  constructor(private firestore: AngularFirestore) {}

  readAll() {
    return this.firestore.collection('stagioni').snapshotChanges();
  }

  read(id: string) {
    throw new Error('Method not implemented.');
  }

  create(object: any) {
    this.firestore.collection('stagioni').add(object);
  }

  update(id: string, object: any) {
    throw new Error('Method not implemented.');
  }

  delete(id: string) {
    throw new Error('Method not implemented.');
  }
}
