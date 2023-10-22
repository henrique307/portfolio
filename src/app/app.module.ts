import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AprensentacaoComponent } from './main/aprensentacao/aprensentacao.component';
import { LazyLoadingComponent } from './main/carrossel/features/lazy-loading/lazy-loading.component';
import { SearchbarComponent } from './main/carrossel/features/searchbar/searchbar.component';
import { InfiniteScrollingComponent } from './main/carrossel/features/infinite-scrolling/infinite-scrolling.component';
import { ApisComponent } from './main/carrossel/features/apis/apis.component';
import { MetodologiaComponent } from './main/metodologia/metodologia.component';
import { FeaturesComponent } from './main/carrossel/features/features.component';
import { ItemCarrosselComponent } from './main/carrossel/item-carrossel/item-carrossel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarrosselComponent } from './main/carrossel/carrossel.component';

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
    ItemCarrosselComponent,
    CarrosselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
