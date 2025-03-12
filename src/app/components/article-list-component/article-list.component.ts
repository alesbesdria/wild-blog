import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {
  title = "Articles Populaires";
  articles: Article[] = [
    { 
      id: 1,
      title: 'Angular 16: Les nouveautés', 
      content: 'Les nouveautés d\'Angular 16 incluent...', 
      createdAt: new Date('2023-05-01'),
      image: 'https://placehold.co/150x150',
      likeCount: 233,
      isPublished: true,
      categoryName: 'Angular',
      isLiked: false
    },
    { 
      id: 2,
      title: 'Développer une API REST', 
      content: 'Développer une API REST nécessite de bonnes pratiques...', 
      createdAt: new Date('2023-04-15'),
      image: 'https://placehold.co/150x150',
      likeCount: 99,
      isPublished: true,
      categoryName: 'API',
      isLiked: false
    }
  ];
}
