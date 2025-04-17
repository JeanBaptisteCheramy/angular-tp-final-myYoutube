import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
  readonly authService = inject(AuthService);
}
