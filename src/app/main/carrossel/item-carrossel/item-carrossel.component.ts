import { Component, Input } from '@angular/core';
import { Projeto } from './utils/projeto.interface';

@Component({
  templateUrl: './item-carrossel.component.html',
  selector: 'app-item-carrossel',
  styleUrls: ['./item-carrossel.component.css'],
})
export class ItemCarrosselComponent {
  @Input() projeto: Projeto = {} as Projeto;
}
