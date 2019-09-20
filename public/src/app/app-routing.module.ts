import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { QuotesComponent } from './quotes/quotes.component';
import { WriteComponent } from './write/write.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Quote } from '@angular/compiler';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'new', component:NewComponent},
  {path:'quotes/:id', component: QuotesComponent},
  {path:'write/:id', component: WriteComponent},
  {path:'edit/:id', component: EditComponent},
  {path:'', pathMatch:'full', redirectTo:'/home'},
  {path:'**', redirectTo:'/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
