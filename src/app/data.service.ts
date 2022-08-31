import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Address } from './address';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firebase: AngularFirestore) {}

  saveaddress(address: Address) {
    console.log('from service');
    console.log(address);
    this.firebase.collection('address').add({ ...address });
  }

  readaddress() {
    return this.firebase.collection('address').snapshotChanges();
  }

  updateaddress(address: Address) {
    return this.firebase.doc('address/' + address.id).update({ ...address });
  }

  deleteAddress(address: Address) {
    return this.firebase.doc('address/' + address).delete();
  }
}
