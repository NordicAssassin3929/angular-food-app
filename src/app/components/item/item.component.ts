import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Item} from "../../interfaces/item";
import { Location } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[];

  constructor(private apiService: ApiService,
              private location: Location) {
      location.subscribe(val => window.location.reload());
  }

  ngOnInit() {
    this.apiService.getItems()
      .subscribe((item) => {
        this.items = item;
      });
  }
}
