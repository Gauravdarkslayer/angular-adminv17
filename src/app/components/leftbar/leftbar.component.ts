import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular.material/angular.material.module';

@Component({
  selector: 'app-leftbar',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './leftbar.component.html',
  styleUrl: './leftbar.component.scss'
})
export class LeftbarComponent {
  showFiller = false;

}
