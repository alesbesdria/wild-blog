import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ArticleListComponent } from './components/article-list-component/article-list.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent, pathMatch: 'full' },
    { path: 'contact', component: ContactPageComponent },
    { path: 'articles/:id', component: ArticlePageComponent },
    { path: 'articles', component: ArticleListComponent },


    // { path: 'contact', component: ContactPageComponent },
    { path: '**', component: NotFoundPageComponent }
  ];
