import {Component} from '@angular/core';
//import {ROUTER_PROVIDERS} from '@angular/router';
//import {Routes, RouterModule} from '@angular/router';
//import {DashboardComponent} from '../../app/dashboard.component/dashboard.component';

@Component({
    selector:'side-nav',
    styleUrls:['sidenav.component.css'],
    templateUrl:'sidenav.component.html'          
})
// directives:[Routes],
    //providers:[RouterModule] 

export class SideNavComponent{
    title = "side nav component";
}