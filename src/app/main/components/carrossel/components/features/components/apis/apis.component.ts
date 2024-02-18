import { Component } from '@angular/core';
import { ApiHandle } from './utils/api.handle';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css']
})
export class ApisComponent {
  constructor(private readonly apiHandle: ApiHandle) {}


}
