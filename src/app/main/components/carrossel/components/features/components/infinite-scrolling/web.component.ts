import { Component } from '@angular/core';
import { GatosService } from './gatos.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css'],
})
export class AppsWeb {

  constructor(
    private readonly pokeService: GatosService,
  ) { }

  pokemons: any[] = [];

  // async ngOnInit(): Promise<void> {
  //   this.addPageToList(1)
  // }

  async addPageToList(page: number) {
    let testPokes = await this.pokeService.getAll(page)
    this.pokemons.push(...testPokes);
  }

  recievePage(page: number) {
    this.addPageToList(page)
  }

}