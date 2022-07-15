import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newpro';
  constructor(@Inject(DOCUMENT) private document: Document){}


  login(credentials){
    console.log(credentials)
  }

  gotourl(){
    this.document.location.href='https://4026-102-68-110-39.eu.ngrok.io/PrestaShop/modules/myButton/DB.php'
  }

}

