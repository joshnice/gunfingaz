import { Component } from '@angular/core';

@Component({
  selector: 'index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class Index {

  public sidebar_top_css: number = 20;
  public sidebar_left_css: number = 20;


  public sidebarStateChange(event: any) {
    if (event === true){
      this.sidebar_top_css = 0;
      this.sidebar_left_css = 0;
    } else {
      this.sidebar_top_css = 20;
      this.sidebar_left_css = 20;
    }
  }

}