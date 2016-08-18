import { Component } from '@angular/core';
import {HeaderComponent} from '../app/header/header.component';
import {SideNavComponent} from '../app/sidenav/sidenav.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives:[HeaderComponent,SideNavComponent,ROUTER_DIRECTIVES],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
