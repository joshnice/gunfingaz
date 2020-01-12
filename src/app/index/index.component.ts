import { Component } from '@angular/core';
import { ArticlePortalDetails } from '../interfaces';


@Component({
  selector: 'index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class Index {

  public articles: ArticlePortalDetails[] = [{
      name: 'GUNFINGAZ EPISODE 14 - LOCAL GEEZERS',
      description: "Derby's free and freshest sounding group Local Geezers come through to the dojo",
      video_length: '1:11:01',
      date: '24 March 2019',
      image_path: '../../assets/images/LOCAL_GEEZERS.png'
  },
  {
    name: 'GUNFINGAZ EPISODE 14 - LOCAL GEEZERS',
    description: "Derby's free and freshest sounding group Local Geezers come through to the dojo",
    video_length: '1:11:01',
    date: '24 March 2019',
    image_path: '../../assets/images/LOCAL_GEEZERS.png'
},
{
  name: 'GUNFINGAZ EPISODE 14 - LOCAL GEEZERS',
  description: "Derby's free and freshest sounding group Local Geezers come through to the dojo",
  video_length: '1:11:01',
  date: '24 March 2019',
  image_path: '../../assets/images/LOCAL_GEEZERS.png'
},
{
  name: 'GUNFINGAZ EPISODE 14 - LOCAL GEEZERS',
  description: "Derby's free and freshest sounding group Local Geezers come through to the dojo",
  video_length: '1:11:01',
  date: '24 March 2019',
  image_path: '../../assets/images/LOCAL_GEEZERS.png'
}];

  // we could have an object with name, date, video length and also image path
  // use an ngfor loop to create the articles inputting the details to the component using inputs

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