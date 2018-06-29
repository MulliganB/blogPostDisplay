import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';

import { ItemService } from './services/item.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './views/main/main.component';
import { FooterComponent } from './components/footer/footer.component';


import { FormsModule } from '@angular/forms';
import { SlicePipe } from '@angular/common';
import { AddItemComponent } from './components/add-item/add-item.component';
import { FullPagePostComponent } from './views/full-page-post/full-page-post.component';
import { DisplayItemsComponent } from './components/display-items/display-items.component';
import { ManageItemsComponent } from './views/manage-items/manage-items.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { AddParagraphComponent } from './components/add-paragraph/add-paragraph.component';
import { FrontHeaderComponent } from './components/front-header/front-header.component';
import { SidebarMainComponent } from './components/sidebar/sidebar-main/sidebar-main.component';
import { SearchBlogComponent } from './components/sidebar/search-blog/search-blog.component';
import { PopularPostsComponent } from './components/sidebar/popular-posts/popular-posts.component';
import { TextEditorComponent } from './Components/text-editor/text-editor.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'Post/:id', component: FullPagePostComponent},
  { path: 'manage', component: ManageItemsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    AddItemComponent,
    FullPagePostComponent,
    DisplayItemsComponent,
    ManageItemsComponent,
    SafeHtmlPipe,
    AddParagraphComponent,
    FrontHeaderComponent,
    SidebarMainComponent,
    SearchBlogComponent,
    PopularPostsComponent,
    TextEditorComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'firebaseToDo'),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]

})
export class AppModule { }
