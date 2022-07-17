import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';



@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {
  loginForm: FormGroup | any;
  title = 'material-login';
  bookService: any;
  guest: any;
  signupForm: any;
  
  constructor(
    private router:Router
  ) {
    this.loginForm = new FormGroup({
       //'[a-zA-Z][a-zA-Z ]+'
       guestId: new FormControl('',[Validators.required,Validators.pattern('[0-9]{0,3}')]),
      guestName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      guestEmail: new FormControl('', [Validators.required,Validators.pattern(
         '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
       //'[a-zA-Z][a-zA-Z ]+'
      ),]),
      // password: new FormControl('', [Validators.required,Validators.pattern(
      //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      // )]),
      guestGender: new FormControl(['', [Validators.required]]),
    guestAddress:new FormControl('',[Validators.required]),
    guestContact:new FormControl('',[Validators.required,Validators.pattern('[0-9]{0,10}')])
  });}
  ngOnInit(): void {
  }
  onSubmit(){

    if(!this.loginForm.valid){

     

     return;

    }

    // localStorage.setItem('user',this.loginForm.value)

    alert("Successfully resistered");

    //this.router.navigate(['/room'])
   // this.router.navigate(['/reservation'])
   //this.router.navigate(['/booking'])
   this.router.navigate(['/roomlist'])

  }

}
  