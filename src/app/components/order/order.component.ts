import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Order} from "../../interfaces/order";
import {ActivatedRoute} from "@angular/router";
import {MyOrder} from "../../interfaces/myorder";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[];
  myOrder: MyOrder;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.apiService.getMyOrder(id)
      .subscribe((myorder) => {
        this.myOrder = myorder[0];
      });
  }
}
