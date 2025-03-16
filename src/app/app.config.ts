import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()
  ]
};


// export class ExampleComponent {
//   articles$: Observable<Article[]>;

//   http = inject(HttpClient); 

//   ngOnInit() {
//     this.articles$ = this.http.get<Article[]>('http://api.exemple.com/articles');
//   }
// }


// dans le template : 
// @for (article of articles$ | async; track $index) {
//   <div>
//     <h3>{{ article.title }}</h3>
//     <p>{{ article.content }}</p>
//   </div>
// }











// export class ExampleComponent {
//   http = inject(HttpClient);  // Injection de dépendance
//   //[...]
// }

// httpClient.get<Type>(url: string).subscribe(...)
// this.http.get<Article[]>('http://api.exemple.com/articles').subscribe(
//   data => console.log('Données reçues:', data),
//   error => console.error('Erreur:', error)
// );

// Type : le type de données attendu en réponse, souvent défini par un modèle.

// url : l’URL de l’API.

// .subscribe(...) : la méthode subscribe permet de gérer la réponse lorsqu’elle est reçue.


// export class ExampleComponent {
//   http = inject(HttpClient); 
//   articles: Article[] = [];

//   ngOnInit() {
//     this.http.get<Article[]>('http://api.exemple.com/articles').subscribe(data => {
//       this.articles = data;
//     });
//   }
// }


// export class ExampleComponent {

//   articles: Article[] = [];
//   articleSubscription: Subscription;

//   http = inject(HttpClient); 

//   ngOnInit() {
//     this.articleSubscription = this.http.get<Article[]>('http://api.exemple.com/articles').subscribe(data => {
//       this.articles = data;
//     });
//   }

//   ngOnDestroy() {
//     this.articleSubscription.unsubscribe();
//   }
// }




// export class ExampleComponent {

//   articles: Article[] = [];
//   private destroy$ = new Subject<void>();

//   http = inject(HttpClient); 

//   ngOnInit() {
//     this.http.get<Article[]>('http://api.exemple.com/articles')
//         .pipe(takeUntil(this.destroy$))
//         .subscribe(data => {
//       this.articles = data;
//     });
//   }

//   ngOnDestroy() {
//     this.destroy$.next();
//     this.destroy$.complete();
//   }
// }



// callback => gestion des erreurs




// this.http.get<Article[]>('http://api.exemple.com/articles').pipe(
//   map(data => data.filter(article => article.isPublished))
// ).subscribe(data => {
//   console.log('Articles publiés:', data);
// });