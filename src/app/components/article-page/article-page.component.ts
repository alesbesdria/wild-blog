import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Observable, switchMap } from 'rxjs';
import { Article } from '../../models/article.model';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-page',
  imports: [DatePipe, CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  // private articleService: ArticleService = inject(ArticleService);
  articleId!: number;
  // // article$!: Observable<Article>;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
    // this.article$ = this.articleService.getArticleById(this.articleId);
  }
}
