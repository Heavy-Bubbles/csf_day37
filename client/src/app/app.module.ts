import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { CatComponent } from './components/cat.component';
import { CustomerComponent } from './components/customer.component';
import { DogComponent } from './components/dog.component';
import { BooksComponent } from './components/books.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'My Home' },
  { path: 'cat', component: CatComponent, title: 'Cat' },
  { path: 'dog', component: DogComponent, title: 'Dog' },
  { path: 'customer/:cId', component: CustomerComponent },
  { path: 'mycat', redirectTo: '/dog', pathMatch: 'full'},

  // default in switchm has to be last
  { path: '**', redirectTo: '/', pathMatch: 'prefix'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatComponent,
    CustomerComponent,
    DogComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
