import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { RouterLink } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        AuthorizationComponent,
        NewsFeedComponent,
        ProfileComponent
    ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ComponentsModule,
        RouterLink
    ],
    exports: [
        AuthorizationComponent,
        NewsFeedComponent,
        ProfileComponent
    ],
    providers: [],
})
export class PagesModule {}