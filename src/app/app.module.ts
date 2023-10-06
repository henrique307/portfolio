import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AprensentacaoComponent } from './main/aprensentacao/aprensentacao.component';
import { LazyLoadingComponent } from './main/features/lazy-loading/lazy-loading.component';
import { SearchbarComponent } from './main/features/searchbar/searchbar.component';
import { InfiniteScrollingComponent } from './main/features/infinite-scrolling/infinite-scrolling.component';
import { ApisComponent } from './main/features/apis/apis.component';
import { MetodologiaComponent } from './main/metodologia/metodologia.component';
import { FeaturesComponent } from './main/features/features.component';
import { CarrosselComponent } from './main/features/carrossel/carrossel.component';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AprensentacaoComponent,
    LazyLoadingComponent,
    SearchbarComponent,
    InfiniteScrollingComponent,
    ApisComponent,
    MetodologiaComponent,
    FeaturesComponent,
    CarrosselComponent,
  ],
  imports: [
    SlickCarouselModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
