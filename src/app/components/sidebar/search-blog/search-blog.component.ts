import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../../models/Item';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.css']
})
export class SearchBlogComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

}
