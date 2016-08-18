import { Component } from '@angular/core';
import {HeaderComponent} from '../app/header/header.component';
import {PaymentComponent} from '../app/payment/payment.component';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives:[HeaderComponent,PaymentComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
