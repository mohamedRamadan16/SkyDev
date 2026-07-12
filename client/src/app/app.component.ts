import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import "zone.js";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SkyDev';
}
