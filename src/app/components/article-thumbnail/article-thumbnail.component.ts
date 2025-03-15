import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article.model';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss'
})
export class ArticleThumbnailComponent {
  @Input() article!: Article;
  @Output() setLiked: EventEmitter<number> = new EventEmitter<number>();

  handleClickLikeBtn(articleId: number) {
      this.setLiked.emit(articleId);
  }
  /////////////////// MESSAGE PARENT ENFANT
  // @Input() parentMessage: string = '';
  /////////////////// 
}
