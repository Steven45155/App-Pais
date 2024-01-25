import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { SidebarComponent } from "./components/sidebar/sidebar.componets";
import { HomePageComponent } from "./pages/home-page/home-page.components";
import { AboutPageComponent } from "./pages/about-page/about-page.components";
import { ContactPageComponent } from "./pages/contact-page/contact-page.components";
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations:[
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  exports:[
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports:[
    CommonModule,
    RouterModule
  ]
})

export class SharedModule{}
