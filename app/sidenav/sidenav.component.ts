import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({   
    moduleId:module.id,
  selector:'side-nav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css'] ,
  directives: [ROUTER_DIRECTIVES]       
})
export class SideNavComponent{
    title = "side nav component";
}