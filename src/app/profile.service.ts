import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Skills } from './models/models';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  skillsCollection: AngularFirestoreCollection<Skills>;
  skills: Observable<Skills[]>;
  constructor(public afs: AngularFirestore) {
    this.skills = this.afs.collection('skills').valueChanges();
  }

  getSkills() {
    return this.skills;
  }
}
