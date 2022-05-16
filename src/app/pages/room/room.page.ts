/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  public roomNo: string;
  public zoneNo: string;
  public gender: string;
  constructor(private adminservice: AdminService) {}

  ngOnInit() {}
  SaveZoneDataToStorage() {
    // console.log(this.roomNo, this.zoneNo, this.gender);
    this.adminservice.saveZoneDataToStorage(
      this.roomNo,
      this.zoneNo,
      this.gender
    );
  }
}
