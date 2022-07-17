import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  loginForm: FormGroup | any;
  title = 'material-login';
  selectedValue!: string;
  startDate = new Date(1990, 0, 1);
  StartDate=new Date(2000, 0, 1);
  constructor( private router:Router) { 
  //selectedValue: string; 
  this.loginForm = new FormGroup({
    //'[a-zA-Z][a-zA-Z ]+'
    bookingId: new FormControl('',[Validators.required,Validators.pattern('[0-9]{0,3}')]),
    roomId: new FormControl('',[Validators.required,Validators.pattern('[0-9]{0,3}')]),
    numofguests:new FormControl('',[Validators.required,Validators.pattern('[0-9]{0,3}')]),
    RoomType:new FormControl('',Validators.required),
    //Check-in:new FormControl('',Validators.required)
  }
    
  
  
  );}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }onSubmit(){

    if(!this.loginForm.valid){

     

     return;

    }
    alert("Successfully Booked");
    // this.router.navigate(['/payment'])
    this.router.navigate(['/paymentstripe'])

  
  }

}



