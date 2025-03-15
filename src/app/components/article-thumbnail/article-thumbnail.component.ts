import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ArticleListComponent } from '../article-list-component/article-list.component';

@Component({
  selector: 'app-article-thumbnail',
  imports: [],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss'
})
export class ArticleThumbnailComponent {
  /////////////////// MESSAGE PARENT ENFANT
  @Input() parentMessage: string = '';
  /////////////////// 
}
