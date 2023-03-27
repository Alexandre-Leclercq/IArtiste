import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../interface/user.interface';
import { GeneratedImage, ResponseGeneratedImage } from '../interface/generatedImage';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: AngularFirestore) {
    this.db = db;
  }

  addImageGenerate(user: User, image: GeneratedImage): void {
    this.db.collection('users').doc(user.uid).collection('images').doc().set(image);
  }
}
