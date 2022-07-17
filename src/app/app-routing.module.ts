import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { BookingComponent } from './booking/booking.component';


import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './dashboard/department/department.component';
import { InventoryComponent } from './dashboard/inventory/inventory.component';
import { StaffComponent } from './dashboard/staff/staff.component';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { OwnerComponent } from './owner/owner.component';
import { PaymentStripeComponent } from './payment-stripe/payment-stripe.component';
import { PaySuccessComponent } from './payment/pay-success/pay-success.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { RegisterComponent } from './register/resgister.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { ReservationComponent } from './services/reservation/reservation.component';
import { RoomComponent } from './services/room/room.component';

import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'',component:WebsiteComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'bookroom',component:BookRoomComponent},
  {path:'room',component:RoomComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'inventory',component:InventoryComponent},
  {path:'department',component:DepartmentComponent},
  {path:'staff',component:StaffComponent},
  {path:'dashboard',component:DashboardComponent}, 
  {path:'owner',component:OwnerComponent},
  {path:'booking',component:BookingComponent},
  {path:'payment',component:PaymentComponent},
  {path:'success',component:PaySuccessComponent},
 {path:'manager',component:ManagerComponent},
{path:'receptionist',component:ReceptionistComponent},
 {path:'register',component:RegisterComponent},
 {path:'guest',component:GuestComponent},
 {path:'roomlist',component:RoomlistComponent},
 {path:'paymentstripe',component:PaymentStripeComponent }
  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
