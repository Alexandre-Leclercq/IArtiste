import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../interface/user.interface';
import { GeneratedImage } from '../interface/generatedImage';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: AngularFirestore) { }

  addImageGenerate(user: User, image: GeneratedImage): void {
    this.db.collection('users').doc(user.uid).collection('images').doc().set(image);
  }

  getAllImageUser(user: User): AngularFirestoreCollection<GeneratedImage[]> {
    return this.db.collection('users').doc(user.uid).collection('images');
  }
}
