import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../interface/user.interface';
import { GeneratedImage, ResponseGeneratedImage } from '../interface/generatedImage';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dbPath = '/users';

  userRef: AngularFirestoreCollection<User>

  constructor(private afs: AngularFirestore) {
    this.userRef = afs.collection(this.dbPath);
  }

  addImageGenerate(user: User, image: GeneratedImage): void {
    this.userRef.doc(user.uid).collection('images').doc().set(image);
  }

  getAllImageUser(user: User) {
    return this.afs.collection('users').snapshotChanges().pipe(map(users => users.map(user => console.log(user.payload.doc.data())))).subscribe();
  }
}
