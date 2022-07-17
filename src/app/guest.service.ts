import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Guest } from './Guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private baseUrl1="http://localhost:8083";
  postGuest: any;
  baseURL!: string;
 
  constructor(private httpClient: HttpClient) { }
  
 


  getGuestList(): Observable<Guest> {
    return this.httpClient.get<Guest>("http://localhost:8083/getAllGuest");
  }
  addGuestList(guest: Guest) {

    console.log(guest.allGuest);

    return this.httpClient.post<Guest>("http://localhost:8083/addGuest", guest);

  }
  
  updateGuestList(guest:Guest,guestId:number){
  return this.httpClient.put<Guest>("http://localhost:8083/updateGuest", guest);
}



deleteGuestList(guest:Guest,guestId:number) {

  return this.httpClient.delete<Guest>("http://localhost:8083/deleteGuest/{id}"+guestId);

}
}