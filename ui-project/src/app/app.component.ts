import { Component } from '@angular/core';
import { FormatterDirective } from './formatter.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-project';
  public _opened: boolean = false;


}
