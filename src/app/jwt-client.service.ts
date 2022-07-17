import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  url="http://localhost:8081"
  constructor(private httpClient: HttpClient) { }


authenticateClient(authenticationRequest:any)
{
  return this.httpClient.post<string>(`${this.url}/auth`,authenticationRequest, {  responseType: 'text' as 'json' })
}


subscribeClient(authenticationRequest:any)
{
  return this.httpClient.post<string>(`${this.url}/subs`,authenticationRequest, {  responseType: 'text' as 'json' })
}

 

  loginUser(token:any)
  {
     localStorage.setItem("token",token)
     return true;
  }

  

  isLoggedIn()
  {
   var token= localStorage.getItem('token');
    if(token===undefined || token==='' || token===null || token==='Error during authentication')
    {
      return false;

    }else
    {
      return true;
    }
  }

  logout()
  {
    localStorage.removeItem('token')
    return true;
  }


  //for getting token
  getToken()
  {
    return localStorage.getItem('token');
    
  }


}
