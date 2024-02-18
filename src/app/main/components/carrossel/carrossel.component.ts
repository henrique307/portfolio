import { Component, OnInit } from '@angular/core';
import { Projeto } from './components/item-carrossel/utils/projeto.interface';
import { AppsWeb } from './components/features/components/infinite-scrolling/web.component';
import { ApisComponent } from './components/features/components/apis/apis.component';
import { IntegracoesComponent } from './components/features/components/integracoes/integracoes.component';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit{
  readonly projetos: Projeto[] = [
    {
      titulo: "Aplicações Web",
      descricao: "Experiencia na criação de aplicações web consumindo APIs externas (PokeAPI nesse caso) apresentando os dados de forma consisa e utilizando as melhores práticas de desenvolvimento",
      classe: "infiniteScrolling",
      componente: AppsWeb,
    },
    {
      titulo: "APIs",
      descricao: "Experiência na criações de APIs documentadas com Swagger, com sistema de autenticação e integração com automações variadas",
      classe: "APIs",
      componente: ApisComponent
    },
    {
      titulo: "Integrações diversas e automações",
      descricao: "Experiência na criação de automações, integrando diversas ferramentas como Telegram, Excel, PowerPoint, Word, APIs externas, Email e testes end-to-end automáticos com selenium webdriver",
      classe: "integracoes",
      componente: IntegracoesComponent,
    },
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
