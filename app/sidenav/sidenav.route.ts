 import { ContactComponent }  from '../../app/contact/contact.component';
 import { HomeComponent }   from '../../app/home/home.component';

// export const HeroesRoutes = [
//   { path: '/heroes',  component: HeroListComponent },
//   { path: '/hero/:id', component: HeroDetailComponent }
// ];


export const SideNavRoutes =[
    {
        path:'/Home',
        component:HomeComponent,
        index:true,
    },
    {
        path:'/Contact',
        component:ContactComponent,
        index:true,
    }
]