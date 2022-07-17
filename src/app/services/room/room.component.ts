import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Room } from 'src/app/model/room';
import { RoomService } from 'src/app/room.service';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

@Injectable()
export class RoomComponent implements OnInit {

  formValue!: FormGroup
 
  room:Room=new Room
    
    rooms: any
    constructor(private roomService: RoomService, private formBuilder: FormBuilder) { }
  
    ngOnInit() {
      this.getRooms();
      this.formValue = this.formBuilder.group({
        roomId:[''],
        roomCharges:[''],
       roomType :[''],
        roomDesc:[''],
       

          })
    }
  
    private getRooms() {
      this.roomService.getRoomList().subscribe(data => {
  
        console.log(Object.values(data.allRoom));
        this.rooms = data.allRoom;
        // console.log(this.rooms.allRoom+"rooms");
      });
    }
  
    addroomto() {
      this.room.roomId = this.formValue.value.roomId;
      this.room.roomCharges = this.formValue.value. roomCharges;
      this.room.roomType = this.formValue.value.roomType;
      this.room.roomDesc = this.formValue.value.roomDesc;
     
  
      this.roomService.addRoomList(this.room).subscribe(data => {
        console.log(data);
        let ref = document.getElementById('clear');
        ref?.click();
        this.formValue.reset;
        alert("Added Room Successfully");
        this.getRooms();
      })    
    }
  
    updateRooms() {
      this.room.roomId = this.formValue.value.roomId;
      this.room.roomCharges = this.formValue.value. roomCharges;
      this.room.roomType = this.formValue.value.roomType;
      this.room.roomDesc = this.formValue.value.roomDesc;
     
      this.roomService.updateRoomList(this.room).subscribe(data => {
        console.log(data);
        alert("Updated Room")
        this.getRooms();
        
      })
    }
    deleterooms(data:any) {
      this.roomService.deleteRoomList(data.roomId).subscribe(data => {
        console.log(data);
       alert("Deleted Room")
         //this.reservation = data.resList;
        this.getRooms();
      })
   }
   onEditDep(room:Room) {
    this.formValue.controls['roomId'].setValue(room.roomId);
    this.formValue.controls['roomCharges'].setValue(room.roomCharges);
    this.formValue.controls['roomType'].setValue(room.roomType);
    this.formValue.controls['roomDesc'].setValue(room.roomDesc);
   
  }
  
  
  
  
   
  }