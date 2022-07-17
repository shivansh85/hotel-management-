import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebsiteComponent } from './website/website.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { HttpClientModule } from '@angular/common/http';


import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './dashboard/department/department.component';
import { InventoryComponent } from './dashboard/inventory/inventory.component';
import { StaffComponent } from './dashboard/staff/staff.component';
import { ServicesComponent } from './services/services.component';
import { ReservationComponent } from './services/reservation/reservation.component';
import { RoomComponent } from './services/room/room.component';
import { DepartmentService } from './services/department.service';
import { InventoryService } from './services/inventory.service';
import { StaffService } from './services/staff.service';
import { OwnerComponent } from './owner/owner.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { ManagerComponent } from './manager/manager.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { RegisterComponent } from './register/resgister.component';
import { GuestComponent } from './guest/guest.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { PaymentStripeComponent } from './payment-stripe/payment-stripe.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    WebsiteComponent,
    AboutusComponent,
    ContactUsComponent,
    BookRoomComponent,
    
     DashboardComponent,
     DepartmentComponent,
     InventoryComponent,
     StaffComponent,
     ServicesComponent,
     ReservationComponent,
     RoomComponent,
     OwnerComponent,
     BookingComponent,
     ManagerComponent,
     ReceptionistComponent,
     RegisterComponent,
     GuestComponent,
     RoomlistComponent,
     PaymentStripeComponent
    


    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,ReactiveFormsModule, BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DepartmentService,InventoryService,StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
