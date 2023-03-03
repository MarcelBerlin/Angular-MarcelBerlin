import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'MarcelBerlin';
  // constructor(public router: Router) {}
  constructor(public translate: TranslateService, public router: Router) {
        // the lang to use, if the lang isn't available, it will use the current loader to get them
    
  }
}
