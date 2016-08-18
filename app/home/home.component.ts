import { Component } from '@angular/core';
import {PaymentComponent} from '../../app/payment/payment.component';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives:[PaymentComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class HomeComponent {
  title = 'app works!';
}
