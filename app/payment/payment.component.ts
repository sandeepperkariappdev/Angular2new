import { Component } from '@angular/core';
import {PaymentService} from '../../app/payment/payment.service';
@Component({
  moduleId: module.id,
  providers:[PaymentService],
  selector: 'payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css']
})
export class PaymentComponent {
    componentName: 'PaymentComponent';
  title = 'app works!';
  payments:Array<any>;
  constructor(private _paymentService: PaymentService) {
        // Utilize .get request from app/friend.service.ts to populate friends object
        this.payments = _paymentService.getPayments();
    }
}
