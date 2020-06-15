import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private firestore: AngularFirestore) {}

  read() {
    return this.firestore.collection('stagioni').snapshotChanges();
  }
}
