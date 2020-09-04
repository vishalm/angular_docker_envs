import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public dockerenv: string;

  title = 'angular-env-docker';

  constructor() {
    this.dockerenv = "ctor"
  }

}
