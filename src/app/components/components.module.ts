import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CardPostComponent } from './card-post/card-post.component';
import { RouterLink } from '@angular/router';
import { FilterNewsComponent } from './filter-news/filter-news.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { HeaderNewsComponent } from './header-news/header-news.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

@NgModule({
    declarations: [
    HeaderComponent,
    NavigationBarComponent,
    CardPostComponent,
    FilterNewsComponent,
    CreateCardComponent,
    HeaderNewsComponent,
    ProfileCardComponent
  ],
    imports: [ 
      CommonModule,
      RouterLink
    ],
    exports: [
      HeaderComponent,
      NavigationBarComponent,
      CardPostComponent,
      FilterNewsComponent,
      CreateCardComponent,
      HeaderNewsComponent,
      ProfileCardComponent
    ],
    providers: [],
})
export class ComponentsModule {}