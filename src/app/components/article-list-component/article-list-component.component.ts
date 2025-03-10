import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-list-component',
  imports: [Article, FormsModule],
  templateUrl: './article-list-component.component.html',
  styleUrl: './article-list-component.component.scss'
})
export class ArticleListComponent {

  article: Article = {
    title: 'Titre de l\'article',
    content: 'Voici le contenu de l\'article.',
    image: 'https://placehold.co/150x150',
    createdAt: new Date(),
    isPublished: false,
    likeCount: 0,
    categoryName: 'Angular',
  };
}