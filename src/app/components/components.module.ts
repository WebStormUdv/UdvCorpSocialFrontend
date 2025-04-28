import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CardPostComponent } from './card-post/card-post.component';
import { RouterLink } from '@angular/router';

@NgModule({
    declarations: [
    HeaderComponent,
    NavigationBarComponent,
    CardPostComponent
  ],
    imports: [ 
      CommonModule,
      RouterLink
    ],
    exports: [
      HeaderComponent,
      NavigationBarComponent,
      CardPostComponent
    ],
    providers: [],
})
export class ComponentsModule {}