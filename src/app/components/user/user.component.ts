import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {User} from "../../interfaces/user";
import {Location} from "@angular/common";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userinfo: User[];

  constructor(private apiService: ApiService,
              private location: Location) { }

  ngOnInit() {
    this.apiService.getUserInfo()
      .subscribe((info) => {
          this.userinfo = info;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
