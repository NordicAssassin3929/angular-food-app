import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Order} from "../../interfaces/order";
import {ActivatedRoute} from "@angular/router";
import {MyOrder} from "../../interfaces/myorder";
import {Location} from "@angular/common";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[];
  myOrder: MyOrder;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.apiService.getMyOrder()
      .subscribe((myorder) => {
        this.myOrder = myorder[0];
        console.log(this.myOrder);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
