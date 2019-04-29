import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemComponent} from "./components/item/item.component";
import {ItemDetailComponent} from "./components/item-detail/item-detail.component";
import {OrderComponent} from "./components/order/order.component";
import {CommentComponent} from "./components/comment/comment.component";

const routes: Routes = [
  { path: 'items', component: ItemComponent },
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'myorder/:id', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
