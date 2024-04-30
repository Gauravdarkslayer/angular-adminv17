import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular.material/angular.material.module';
import { Router, RouterModule } from '@angular/router'
@Component({
  selector: 'app-leftbar',
  standalone: true,
  imports: [AngularMaterialModule, RouterModule],
  templateUrl: './leftbar.component.html',
  styleUrl: './leftbar.component.scss'
})
export class LeftbarComponent {
  showFiller = false;
  constructor(private router: Router) {}
  logout() {
    this.router.navigate(['/auth/login']);
  }
}
