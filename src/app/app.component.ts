import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from './modules/angular.material/angular.material.module';
import { LeftbarComponent } from './components/leftbar/leftbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularMaterialModule, LeftbarComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-adminv17';
}
