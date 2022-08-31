import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from '../address';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  form = new Address();
  list: Address[] = [];

  constructor(private service: DataService, private router: Router) {}
  ngOnInit(): void {
    this.service.readaddress().subscribe((data) => {
      this.list = data.map((doc) => {
        return {
          id: doc.payload.doc.id,
          ...(doc.payload.doc.data() as {}),
        } as Address;
      });
      console.log('Data recieved', data);
    });
  }
  saveData() {
    console.log('check in component');
    console.log(this.form);
    if (this.form.id == null) {
      this.service.saveaddress(this.form);
    } else {
      this.service.updateaddress(this.form);
    }
  }

  editData(address: Address) {
    alert('are you sure want to Edit data');
    this.form = address;
  }

  clearData() {
    alert('are you sure want to clear data ');

    this.form = new Address();
  }

  deleteData(address: Address) {
    alert('are you sure want to delete ');
    this.service.deleteAddress(address.id);
  }

  helo() {
    this.router.navigate(['root']);
  }
}
