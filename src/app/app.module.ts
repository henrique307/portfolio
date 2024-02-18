import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AprensentacaoComponent } from './main/components/aprensentacao/aprensentacao.component';
import { MetodologiaComponent } from './main/components/metodologia/metodologia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppsWeb } from './main/components/carrossel/components/features/components/infinite-scrolling/web.component';
import { ApisComponent } from './main/components/carrossel/components/features/components/apis/apis.component';
import { FeaturesComponent } from './main/components/carrossel/components/features/features.component';
import { ItemCarrosselComponent } from './main/components/carrossel/components/item-carrossel/item-carrossel.component';
import { CarrosselComponent } from './main/components/carrossel/carrossel.component';
import { ObserverComponent } from './main/components/carrossel/components/features/components/infinite-scrolling/components/observer/observer.component';
import { IntersectionObserverModule } from 'ngx-intersection-observer';
import { IntegracoesComponent } from './main/components/carrossel/components/features/components/integracoes/integracoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AprensentacaoComponent,
    AppsWeb,
    ApisComponent,
    MetodologiaComponent,
    FeaturesComponent,
    ItemCarrosselComponent,
    CarrosselComponent,
    ObserverComponent,
    IntegracoesComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    IntersectionObserverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
