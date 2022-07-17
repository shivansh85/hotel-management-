import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Inventory } from '../model/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private baseURL ="http://localhost:8082/inventory";
  postInventory: any;
  
  constructor(private httpClient: HttpClient) { }

  getAllInventory(): Observable<Inventory[]>{
    return this.httpClient.get<Inventory[]> ( "http://localhost:8082/inventory/showinventory");
  }

  addInventory(inventory: Inventory) {
    console.log(inventory );
    return this.httpClient.post<Inventory[]>( "http://localhost:8082/inventory/addinventory", inventory);
  }
  updateInventory(inventory:Inventory, inventory_id:number)
  {
    return this.httpClient.put<Inventory>(this.baseURL+'/updateinventory/'+inventory_id,inventory)
   
  } deleteInventory(inventory:Inventory, inventory_id:number) {

    return this.httpClient.delete<Inventory>(this.baseURL + '/deleteinventory/'+inventory_id);

  }

}
