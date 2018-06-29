import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    id: '',
    Title: '',
    Subtitle: '',
    Content: new Array,
    datePublish: new Date(),
    viewState: false
  }
  i: number;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.i = 1;
  }

  makeid() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 25; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  addParagraph() {
    const paragraph = `<input type="text" placeholder="Add Content for Second Paragraph" [(ngModel)]="item.Content[i]" name="Content">
                        <a class="secondary-content">
                          <i class="fa fa-plus-circle right-align" (click)="addParagraph()"></i>
                        </a>`;
    const remove = document.getElementById('add');
    const add = document.getElementById('content');
    remove.innerHTML = '';
    add.innerHTML += paragraph;
    this.i++;
  }

  onSubmit() {
    if (this.item.Title != '' && this.item.Content != null)
    {
      this.item.id = this.makeid();
      this.itemService.addItem(this.item);
      this.item.id = '';
      this.item.Title = '';
      this.item.Subtitle = '';
      this.item.Content = null;
      this.item.datePublish = null;
      this.item.viewState = false;
    }
  }

}
