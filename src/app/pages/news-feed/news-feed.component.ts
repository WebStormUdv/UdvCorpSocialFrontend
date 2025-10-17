import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent{

  public viewModalEvent(state: boolean) {
    const elementModal = document.querySelector(".modal_create_news") as HTMLElement;
    const elementMain = document.querySelector(".news-feed") as HTMLElement;
    const elementHeader = document.querySelector(".app-header") as HTMLElement;
  
    if (!elementModal) {
      console.error('elementModal with class "modal_create_news" not found!');
      return;
    }
  
    if (state === false) {
      state = true;
      elementModal.style.display = "flex";
      elementMain.style.opacity = "50%";
      elementHeader.style.opacity = "50%";
    } else {
      state = false;
      elementModal.style.display = "none";
      elementMain.style.opacity = "100%";
      elementHeader.style.opacity = "100%";
    }
    console.log(state);

  }
}
