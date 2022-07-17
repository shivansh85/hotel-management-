import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8082/';

  constructor(private http:HttpClient) { }

  getAllGuest(): Observable<any> {  

    return this.http.get(`${this.baseUrl}`+' getAllGuest');  

  }  

 

  addGuest(guest: object): Observable<object> {  

    return this.http.post(`${this.baseUrl}`+'addGuest', guest);  

  }  

 

  deleteGuestById(id: number): Observable<any> {  

    return this.http.delete(`${this.baseUrl}/deleteGuest/${id}`, { responseType: 'text' });  

  }  

 

 

 

  updateGuest(guest: object): Observable<object> {  

    return this.http.put(`${this.baseUrl}`+'updateGuest',guest);

  }  
}