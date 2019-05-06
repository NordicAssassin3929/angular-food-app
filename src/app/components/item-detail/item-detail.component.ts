import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../interfaces/item";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;
  message: string;
  id: number;
  note: string;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private location: Location) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getItem(this.id)
      .subscribe((item) => {
        this.item = item[0];
      });
  }

  add(): void {
    this.apiService.addItem(this.item).subscribe((result) => console.log(result));
    this.location.back();
  }

  update(): void {
    this.apiService.updateItem(this.item, this.id).subscribe((result) => console.log(result));
    this.location.back();
  }

  delete(): void {
    console.log(this.id);
    this.apiService.deleteItem(this.id).subscribe((result) => console.log(result));
    this.location.back();
  }

  addOrder(): void {
    // moram kreirat order json object
    var timestamp = Number(new Date());
    console.log(timestamp);
    const myObj = {
    app_user_id: 2,
    order_time: '2019-04-30 08:00:00',
    note: this.note,
    item_id: this.item.item_id,
    };

    const order = JSON.stringify(myObj);

    console.log(order);
    this.apiService.addMyOrder(order).subscribe((result) => console.log(result));
    this.location.back();
  }
}
