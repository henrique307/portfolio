import { Component, Input } from '@angular/core';
import { Projeto } from './utils/projeto.interface';

@Component({
  selector: 'app-item-carrossel',
  styleUrls: ['./item-carrossel.component.css'],
  template: `
  <div class="projeto">
    <h2>{{ projeto.titulo }}</h2>
    <p>{{ projeto.descricao }}</p>
    <ng-container *ngComponentOutlet="projeto.componente"></ng-container>
  </div>
`

})
export class ItemCarrosselComponent {
  @Input() projeto: Projeto = {} as Projeto;
}
