import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-list-component',
  imports: [FormsModule, Article],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {
  title = "Articles Populaires";
  article = [Article];
}
