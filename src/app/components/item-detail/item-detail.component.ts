import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../interfaces/item";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;
  message: string;
  id: number;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getItem(this.id)
      .subscribe((item) => {
        this.item = item[0];
      });
  }

  add(): void {
    this.apiService.addItem(this.item).subscribe((result) => console.log(result));
  }

  update(): void {
    this.apiService.updateItem(this.item, this.id).subscribe((result) => console.log(result));
  }

  delete(): void {
    console.log(this.id);
    this.apiService.deleteItem(this.id).subscribe((result) => console.log(result));
  }
}
