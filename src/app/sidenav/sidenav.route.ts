 import { ContactComponent }  from '../../app/contact/contact.component';
 import { HomeComponent }   from '../../app/home/home.component';


export const SideNavRoutes =[
    {
        path:'',
        name:'Home',
        component:HomeComponent,
        index:true,
    },
    {
        path:'Contact',
        name:'Contact',
        component:ContactComponent
    }
]