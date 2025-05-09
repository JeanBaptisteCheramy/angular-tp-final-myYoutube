import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly router = inject(Router)
  public readonly authService = inject(AuthService);
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
