import {  provideRouter, RouterConfig  } from '@angular/router';
import {AppComponent} from '../app/app.component'
import { SideNavRoutes } from '../app/sidenav/sidenav.route';
import { HeaderRoutes } from '../app/header/header.routes';
import { ContactComponent }  from '../app/contact/contact.component';
 import { HomeComponent }   from '../app/home/home.component';


const routes:RouterConfig =[
    ...SideNavRoutes,
    ...HeaderRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AppComponent
]


//  ...SideNavRoutes,
//     ...HeaderRoutes