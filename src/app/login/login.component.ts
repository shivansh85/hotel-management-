import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtClientService } from '../jwt-client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

// loginForm: FormGroup | any;
//   title = 'material-login';
//   constructor(
//     private router:Router
//   ) {
//     this.loginForm = new FormGroup({
//       email: new FormControl('', [Validators.required,Validators.email,Validators.pattern(
//         '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
//       // '[a-zA-Z][a-zA-Z ]+'
//       ),]),
//       password: new FormControl('', [Validators.required,Validators.pattern(
//         '^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-]).{8,12}$'
//       )])
//     });
//    }
//   ngOnInit(): void {
//   }
//   onSubmit(){
//     if(!this.loginForm.valid){
//       return;
//     }
//     localStorage.setItem('user',this.loginForm.value)
//     this.router.navigate(['/dashboard'])
//   }
// }
 //*registering user deatils
//user: User=new User({ id: "", username: "", email: "", password: "" });

//user: User=new User("","","","")
//*login 
authenticationRequest:any={
  "username":"",
  "password":"",
  
 
};

surveyForm!: FormGroup;
submitted= false;

response:any;

//*this is for declaring toggle password 
public showPassword: boolean = false;


constructor(private service:JwtClientService,private  formBuilder: FormBuilder,private router:Router) { }



onSubmit():void

{

  //console.log("form is submitted");
  if((this.authenticationRequest.username=='admin'&& this.authenticationRequest.password=='admin123')){
   window.location.href="/manager"
  }
  else{
   //alert(");
   Swal.fire(

    "Logged Successfully",

  )
   
  }


  //console.log("form is submitted");
  if((this.authenticationRequest.username=='ricky'&& this.authenticationRequest.password=='Jaiguru')){
   window.location.href="/receptionist"
  }
  else{
   //alert(");
   Swal.fire(

    "Logged Successfully",

  )
   
  }

  if((this.authenticationRequest.username=='shiv'&& this.authenticationRequest.password=='ram123')){
    window.location.href="/roomlist"
   }
   else{
    //alert(");
    Swal.fire(

      "Logged Successfully",
 
    )

   }
 //console.log("form is submitted");
 if((this.authenticationRequest.username!=''&& this.authenticationRequest.password!='')&&(this.authenticationRequest.username!=null && this.authenticationRequest.password!=null))
 {
   console.log("we have to submit the form");

   this.service.authenticateClient(this.authenticationRequest)
   .subscribe((data:any)=>
    {
      
      console.log(data);
     
     // localStorage.setItem('token',data)
   
     this.service.loginUser(data)
     if(this.service.isLoggedIn()==true)
     {
     
    // window.location.href="/user"
    this.router.navigate(['/dashboard'])
     }
     else
     {
       alert("please enter valid details");
     }
    },
    (error:any)=>
     {
       console.log(error);
     }
     
     );
 }
 else
 {
   alert("Fileds are empty!!");
 }


}
ngOnInit(): void {
    
}


//*togglepassword method declaration
public togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}



}