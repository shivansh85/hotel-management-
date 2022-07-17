import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Department} from 'src/app/model/department';
import { DepartmentService } from 'src/app/services/department.service';



@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments!: Department[];
  formValue!: FormGroup

  departmentModelObject: Department = new Department;
  showAdd!: boolean;
  showBtn!: boolean;
  alldepartmentnData: any;;
  

  constructor(private formBuilder: FormBuilder,private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group(
      {
        department_id: [''],
        department_name: [''],
      
      }
    )
    this.getDepartments();
  }


clickAddDepartment()
{
  this.formValue.reset();
  this.showAdd=true;
  this.showBtn=false;
}

getDepartments()
{
  this.departmentService.getAllDepartment().subscribe((department: Department[])=>
  {
    console.log(department);
    this.departments= department;
  });
}

//subscribe
addDepartment() {
  this.departmentModelObject.department_id=this.formValue.value.department_id;
  this.departmentModelObject.department_name= this.formValue.value.department_name;
  

  

  this.departmentService.postDepartment(this.departmentModelObject).subscribe((res:any[]) => {
    console.log(res);
    alert("New record Added");
    this.formValue.reset();
    this.getDepartments();
  }
    , err => {
      alert("Error Occured");
    })
}




//delete
deleteDepartment(data:any)

{

  this.departmentService.deleteDepartment(data.department_id).subscribe((res:any[])=>{
    console.log(res);
    alert("Record Deleted");
    this.formValue.reset();
    this.getDepartments();
  })
  if(confirm("delete the record of id "+data.department_id))
  {
    console.log("delete");
  }
}



//edit
onEditDepartment(data:any)
{
  
  this.departmentModelObject.department_id = data.department_id;
  this.formValue.controls['department_name'].setValue(data.department_name);
  

}

updateDepartment()
{
  // this.departmentModelObject.
  // this.departmentModelObject.department_id = data.department_id;
  // this.formValue.controls['department_name'].setValue(data.department_name);
 
   this.departmentModelObject.department_id= this.formValue.value.department_id;

 
  console.log(this.departmentModelObject)

  this.departmentService.updateDepartment(this.departmentModelObject,this.departmentModelObject.department_name)
  .subscribe((res:any[])=>{
    alert("Record Updated");
    this.getDepartments();
  });
}
  
  
  

}