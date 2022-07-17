import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Inventory } from 'src/app/model/inventory';
import { InventoryService } from 'src/app/services/inventory.service';



@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

@Injectable()
export class InventoryComponent implements OnInit {
 inventorys!: Inventory[];
  formValue!: FormGroup

  inventoryModelObject: Inventory = new Inventory;
  showAdd!: boolean;
  showBtn!: boolean;
//  allinventoryData: any;
 // inventoryService: any;
;
  

  constructor(private formBuilder: FormBuilder,private inventoryService:InventoryService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group(
      {
        inventory_id: [''],
        inventory_name: [''],
        
      }
    )
    this.getInventorys();
  }


clickAddInventory()
{
  this.formValue.reset();
  // this.showAdd=true;
  // this.showBtn=false;
}

// getInventorys()
// {
//   this.inventoryService.getAllInventory().subscribe((inventory: Inventory[])=>
//   {
//     console.log(inventory);
//     this.inventorys= inventory;
//   });
// }
 getInventorys(){
  this.inventoryService.getAllInventory().subscribe((data)=>
   {
      console.log(data);
     this.inventorys= data;
    });
 }
//subscribe
addInventory() {
  this.inventoryModelObject.inventory_id=this.formValue.value.inventory_id;
  this.inventoryModelObject.inventory_name= this.formValue.value.inventory_name;
  

  

  this.inventoryService.addInventory(this.inventoryModelObject).subscribe(inventory => {
    console.log(inventory);
  //   alert("New inventory done!!");
  //   this.formValue.reset;
  //   this.getInventorys();
  // })}

    alert("New record Added");
    this.formValue.reset();
    this.getInventorys();
  }
      ,(err) => {
      alert("Error Occured");
     })


 
}
updateInventory()
{
  this.inventoryModelObject.inventory_id=this.formValue.value.inventory_id;
  this.inventoryModelObject.inventory_name= this.formValue.value.inventory_name;
  
 
  console.log(this.inventoryModelObject)

  this.inventoryService.updateInventory(this.inventoryModelObject, this.inventoryModelObject.inventory_id)
  .subscribe((inventory)=>{
    alert("Record Updated");
    this.getInventorys();
  });
}
  
deleteInventory(inventory: any) {
  this.inventoryService.deleteInventory(this.inventoryModelObject, this.inventoryModelObject.inventory_id).subscribe(inventory=> {
   alert("Deleted")
     //this.reservation = data.resList;
    this.getInventorys();
  })
}
  

}


 

