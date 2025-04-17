import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AsideComponent } from "./components/aside/aside.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AsideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
