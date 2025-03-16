import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Observable, switchMap } from 'rxjs';
import { Article } from '../../models/article.model';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-page',
  imports: [CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {

  private route: ActivatedRoute = inject(ActivatedRoute);
  private articleService: ArticleService = inject(ArticleService);
  private apiService: ApiService = inject(ApiService);

  articleId!: number;
  article$!: Observable<Article>;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.getArticleById(this.articleId);
    });
  }
  
  getArticleById(id: number) {
    this.article$ = this.apiService.getArticleById(id);  // Utilisation de la méthode getArticleById() du service ApiService
  }

}
