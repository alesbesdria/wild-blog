import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [DatePipe],
  templateUrl: './article.model.html',
  styleUrl: './article.model.scss'
})
export class Article {
  title = 'Titre de l\'article';
  content = 'Voici le contenu de l\'article.';
  image = 'https://placehold.co/150x150';
  createdAt = new Date();
  isPublished = false;
  likeCount = 0;
  categoryName = 'Angular';

  likeButton(): void {
    this.likeCount += 1;
  }
}
