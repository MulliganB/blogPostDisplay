import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-paragraph',
  templateUrl: './add-paragraph.component.html',
  styleUrls: ['./add-paragraph.component.css']
})
export class AddParagraphComponent implements OnInit {
  i: number;
  constructor() { }

  ngOnInit() {
    this.i = 1;
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
}
