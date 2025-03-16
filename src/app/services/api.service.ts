import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, inject } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/articles';

  private http = inject(HttpClient);

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération des articles :', error);
        return throwError(error);
      })
    );
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }
}