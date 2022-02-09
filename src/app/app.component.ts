import { Component } from '@angular/core';
import { JoyrideService } from 'ngx-joyride';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private joyride: JoyrideService) {}
  name = 'Angular';
  tour() {
    this.joyride.startTour({ steps: ['firstStep', 'firstStep2'] });
  }
}
