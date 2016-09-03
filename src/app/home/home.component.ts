import { Component,OnInit } from '@angular/core';
import {PaymentComponent} from '../../app/payment/payment.component';
import {ClaimsComponent} from '../../app/claims/claims.component';
import {CardsComponent} from '../../app/cards/cards.component';
import {DairyFeedComponent} from '../../app/dairyfeed/dairyfeed.component';
import {NeedHelpComponent} from '../../app/needhelp/needhelp.component';
@Component({
  moduleId: module.id,
  selector: 'home',
  directives:[PaymentComponent,ClaimsComponent,CardsComponent,DairyFeedComponent,NeedHelpComponent],
  templateUrl:'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  title = 'app works!';



  constructor(){}

  
}
