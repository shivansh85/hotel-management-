

import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Staff } from 'src/app/model/staff';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})

@Injectable()
export class StaffComponent implements OnInit {
  sta:Staff= new Staff

  formValue!: FormGroup
  
  staff : any

  constructor(private staffService: StaffService , private formBuilder: FormBuilder) { }

  ngOnInit() {

    
    this.formValue = this.formBuilder.group({
      empId:[''],
      empDeptId:[''],
      empName:[''],
      empDeptName:[''],
      email:[''],
      empSalary:['']
      
      })
      
      this.getstaffs();
      //this.addstaffto();
      this.staffService.getStaffList();
  }

  getstaffs() {
    this.staffService.getStaffList().subscribe(data => {

      console.log(Object.values(data.allEmp));
      this.staff = data.allEmp;
      console.log(this.staff.allEmp+"Staff");
    });
  }

  addstaffto() {
    this.sta.empId = this.formValue.value.empId;
    this.sta.empDeptId = this.formValue.value. empDeptId;
    this.sta.empName = this.formValue.value.empName;
    this.sta.empDeptName = this.formValue.value.empDeptName; 
    this.sta.email = this.formValue.value.email; 
    this.sta.empSalary = this.formValue.value.empSalary; 

    this.staffService.addStaffList(this.sta).subscribe(data => {
      console.log(data);
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset;
      alert("Added Staff Successfully");
      this.getstaffs();
    })    
  }

  updateStaffs() {
    this.sta.empId = this.formValue.value.empId;
    this.sta.empDeptId = this.formValue.value. empDeptId;
    this.sta.empName = this.formValue.value.empName;
    this.sta.empDeptName = this.formValue.value.empDeptName; 
    this.sta.email = this.formValue.value.email; 
    this.sta.empSalary = this.formValue.value.empSalary; 
    this.staffService.updateStaffList(this.sta).subscribe(data => {
      console.log(data);
      alert("Updated Staff")
      this.getstaffs();
      
    })
  }
  deleteStaffs(data:any) {
    this.staffService.deleteStaffList(data.empId).subscribe(data => {
      console.log(data);
     alert("Deleted Staff")
       //this.reservation = data.resList;
      this.getstaffs();
    })
 }
 onEditDep(staff:Staff) {
  this.formValue.controls['empId'].setValue(staff.empId);
  this.formValue.controls['empDeptId'].setValue(staff.empDeptId);
  this.formValue.controls['empName'].setValue(staff.empName);
  this.formValue.controls['empDeptName'].setValue(staff.empDeptName);
  this.formValue.controls['email'].setValue(staff.email);
  this.formValue.controls['empSalary'].setValue(staff.empSalary);
}
}