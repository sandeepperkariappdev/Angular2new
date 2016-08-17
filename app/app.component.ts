import { Component } from '@angular/core';
import {HeaderComponent} from '../app/header/header.component';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives:[HeaderComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
