import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommentService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    CommentService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
