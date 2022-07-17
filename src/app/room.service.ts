import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  
   private baseURL ="http://localhost:8083";
  constructor(private httpClient: HttpClient) { }
  getRoomList(): Observable<any>{
    return this.httpClient.get<any> (this.baseURL+'/findAllRoom');
  }
  addRoomList(room:Room) {
    console.log(room);
    return this.httpClient.post<any>(this.baseURL + '/addRoom', room);
  }

  updateRoomList(room:Room) {
    return this.httpClient.put<any>(this.baseURL + '/updateRoom',room);
  }
 deleteRoomList(roomId:number) {
   return this.httpClient.delete<any>(this.baseURL + '/delete/'+roomId);
  }
 }

