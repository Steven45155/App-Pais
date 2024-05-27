import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './shared/pages/about-page/about-page.components';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.components';
import { AppComponent } from './app.component';

const routes:Routes=[
  {
    path: '',
    loadChildren: ()=> import('./countries/countries.module').then(m =>m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot( routes, {useHash: true} )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
