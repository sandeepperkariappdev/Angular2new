import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'header',
  templateUrl: 'app/header/header.component.html',
  styleUrls: ['app/header/header.component.css']
})
export class HeaderComponent {
  title = 'header fill your content';
}
