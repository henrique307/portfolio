import { Component, OnInit } from '@angular/core';
import { InfiniteScrollingComponent } from './features/infinite-scrolling/infinite-scrolling.component';
import { LazyLoadingComponent } from './features/lazy-loading/lazy-loading.component';
import { Projeto } from './item-carrossel/utils/projeto.interface';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit{
  readonly projetos: Projeto[] = [
    {
      titulo: 'Lazy Loading',
      classe: "lazyLoading",
      descricao: "Descrição lazy loading",
      // alt: "lazy loading demo",
      componente: LazyLoadingComponent
    },
    {
      titulo: 'Infinite Scrolling',
      descricao: "Descrição infinite scrolling",
      classe: "lazyLoading",
      // alt: "infinite scrolling demo",
      componente: InfiniteScrollingComponent,
    }
  ]

  selectedIndex: number = 0;

  ngOnInit(): void {
      
  }

  selecionaProjeto(index: number) {
    this.selectedIndex = index
  }

  onVoltar(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.projetos.length - 1
    } else {
      this.selectedIndex--
    }
  }

  onAvancar(): void {
    if(this.selectedIndex === this.projetos.length - 1) {
      this.selectedIndex = 0
    } else {
      this.selectedIndex++
    }
  }

};


