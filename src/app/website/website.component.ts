import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  constructor(
    private router: Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

//     session = sessionStorage['login_status']
// onBook()
// {
//   if(this.session =='1')
//   {

//       this.router.navigate(['book-component'])
//   }
//   else{
//       Error('Please Login')
//       this.router.navigate(['login-component'])
      
//   }
// }

// onLogout()
// {
// sessionStorage.removeItem('login_status')
// sessionStorage.removeItem('userid')
// sessionStorage.removeItem('username')
// this.router.navigate(['/'])
// }
}
