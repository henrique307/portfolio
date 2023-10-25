import { Component } from '@angular/core';
import { Gato } from './interface/gato.interface';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scrolling',
  templateUrl: './infinite-scrolling.component.html',
  styleUrls: ['./infinite-scrolling.component.css']
})
export class InfiniteScrollingComponent implements OnInit {
  gatos: Gato[] = [];

  ngOnInit(): void {
    
  }

}
