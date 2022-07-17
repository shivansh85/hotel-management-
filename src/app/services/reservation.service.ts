import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Reservation } from '../model/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  

  private baseURL = "http://localhost:8083/reservation";
  constructor(private httpClient: HttpClient) { }



 




  getReservationList(): Observable<any> {

    return this.httpClient.get<any>( "http://localhost:8083/reservation/ShowAllReservations");

  }



  addReservationList(reservation: Reservation) {

    console.log(reservation);

    return this.httpClient.post<any>(this.baseURL + '/addReservation', reservation);

  }



  updateReservationList(reservation: Reservation,bookingId:number) {

    return this.httpClient.put<any>(this.baseURL + '/updateReservation/'+bookingId,reservation);

  }



  deleteReservationList(bookingId:number) {

    return this.httpClient.delete<any>(this.baseURL + '/deleteReservation/'+bookingId);

  }

}