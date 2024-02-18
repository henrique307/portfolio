import { Component } from '@angular/core';
import { Gato } from './interface/gato.interface';
import { OnInit } from '@angular/core';
import { ApiService } from 'src/utils/api.service';

@Component({
  selector: 'app-infinite-scrolling',
  templateUrl: './infinite-scrolling.component.html',
  styleUrls: ['./infinite-scrolling.component.css']
})
export class InfiniteScrollingComponent implements OnInit {

  constructor(private readonly apiService: ApiService) {}

  gatos: Gato[] = [];

  async ngOnInit(): Promise<void> {
    this.gatos = await this.apiService.getGatos();
    console.log(this.gatos)
  }

};