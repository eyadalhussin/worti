import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from '../animations/routerAnimations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [ slider ]
})

export class MainComponent {
  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
