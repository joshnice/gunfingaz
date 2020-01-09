import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ArticlePortalDetails } from '../interfaces';

@Component({
  selector: 'article-portal',
  templateUrl: './article-portal.component.html',
  styleUrls: ['./article-portal.component.css']
})

export class ArticlePortal implements AfterViewInit {

    @Input() content: ArticlePortalDetails;

    ngAfterViewInit() {
        this.setContent();
    }

    setContent() {
    }

}