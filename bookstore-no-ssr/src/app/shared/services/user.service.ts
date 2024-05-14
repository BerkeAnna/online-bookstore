import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';

  constructor(private afs: AngularFirestore) { }


  //CRUD

  create( user: User){
      return this.afs.collection<User>(this.collectionName).doc(user.id).set(user); 
  }
  getAll() {
    return this.afs.collection<User>(this.collectionName).valueChanges();
  }
  
  update(userId: string, userData: Partial<User>) {
    return this.afs.collection<User>(this.collectionName).doc(userId).update(userData);
  }
  
  delete(userId: string) {
    return this.afs.collection<User>(this.collectionName).doc(userId).delete();
  }
  

}