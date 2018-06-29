import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-full-page-post',
  templateUrl: './full-page-post.component.html',
  styleUrls: ['./full-page-post.component.css']
})
export class FullPagePostComponent implements OnInit {
  items: Item[];
  item: Item = {
    id: '',
    Title: '',
    Subtitle: '',
    Content: new Array,
    datePublish: new Date(),
    viewState: false
  };

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    let temp;
    this.itemService.getItems().subscribe(items => {
      /*Initialise items*/
      this.items = items;
      /*Populate item*/
      this.items.forEach(function(x: Item) {
        if (x.viewState === true) {
          temp = x;
        }
      });
      this.item = temp;
      temp.viewState = false;
      this.itemService.updateItem(temp);
    });
  }
}
