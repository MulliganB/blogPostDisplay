import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/Item';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css']
})
export class DisplayItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private itemService: ItemService) {  }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  updateViewState(event, item: Item) {
    item.viewState = true;
    this.itemService.updateItem(item);
    this.clearState();
  }

  refresh() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

}
