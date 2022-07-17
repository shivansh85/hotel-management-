import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Guest } from '../Guest';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})

export class GuestComponent implements OnInit {

  res: Guest = new Guest;
  formValue!: FormGroup
  reservation: any
  guestId: any
  guest: any;
  addGuestList: any;
  
  constructor( private guestService: GuestService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formValue = this.formBuilder.group({

      guestId: [''],

      guestName: [''],

      guestEmail: [''],

      guestGender: [''],

      guestAddress: [''],

      guestContact: ['']

    })

   

    this.getguests();

  }

  getguests() {

    this.guestService.getGuestList().subscribe(data => {

      console.log(Object.values(data.allGuest));

      this.guest = data.allGuest;



    });

  }
  
  addGuest() {
    this.res.guestId = this.formValue.value.guestId;
    this.res. guestName= this.formValue.value.guestName;
    this.res.guestEmail = this.formValue.value.guestEmail;
    this.res.guestGender = this.formValue.value.guestGender;
    this.res.guestAddress = this.formValue.value.guestAddress;
    this.res.guestContact = this.formValue.value.guestContact;

    this.guestService.addGuestList(this.res).subscribe(data => {
      console.log(data.allGuest);
      alert('Booking Done!!!');
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset;
      this.getguests;

    },
      (      err: any) => {
        alert('Guest added Successfully!!!');
      }
    )

  }
  updateGuests() {
    this.res.guestId = this.formValue.value.guestId;
    this.res.guestName = this.formValue.value.guestName;
    this.res.guestEmail = this.formValue.value.guestEmail;
    this.res.guestGender = this.formValue.value.guestGender;
    this.res.guestAddress = this.formValue.value.guestAddress;
    this.res.guestContact = this.formValue.value.guestContact;
  
    this.guestService.updateGuestList(this.res,this.res.guestId).subscribe((data: any) => {
      console.log(data);
      alert("Updated")
      this.getguests();
      
    })
  }
  deleteGuests() {
    this.guestService.deleteGuestList(this.res,this.res.guestId).subscribe((data: any) => {
     alert("Deleted")
       //this.reservation = data.resList;
      this.getguests();
    })
 }
 onEditGue(guest:Guest) {
  this.formValue.controls['guestId'].setValue(guest.guestId);
  this.formValue.controls['guestName'].setValue(guest.guestName);
  this.formValue.controls['guestEmail'].setValue(guest.guestEmail);
  this.formValue.controls['guestGender'].setValue(guest.guestGender);
  this.formValue.controls['guestAddress'].setValue(guest.guestAddress);
  this.formValue.controls['guestContact'].setValue(guest.guestContact);
}
}


