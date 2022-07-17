
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Department } from '../model/department';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseUrl1="http://localhost:8081/showdept";
  constructor(private httpClient: HttpClient) { }

  

  getAllDepartment(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${this.baseUrl1}`);
  }
  
  postDepartment(departments:Department): Observable<Department[]>
  {
    return this.httpClient.post<Department[]>("http://localhost:8081/adddept",departments)
    
  }
  
  //get
 
  // getDepartments()
  // {
  //   return this.httpClient.get<any>("http://localhost:8081/showdept").pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  //update
  updateDepartment(department:any, department_id:string)
  {
    return this.httpClient.put<any>("http://localhost:8081/updatedept/"+department_id,department).pipe(map((res:any)=>{
      return res;
    }))
  }

  //delete
  deleteDepartment(department_id:string)
  {
    return this.httpClient.delete<any>("http://localhost:8081/deletedept/"+department_id).pipe(map((res:any)=>{
      return res;
    }))
  } 
}