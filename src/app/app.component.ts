import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kevin-as-a-service';
  clicked = false;

  carouselClicked() {
    this.clicked = true;
  }
}
