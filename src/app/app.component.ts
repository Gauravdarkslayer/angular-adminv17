import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from './modules/angular.material/angular.material.module';
import { LeftbarComponent } from './components/leftbar/leftbar.component';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularMaterialModule, LeftbarComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-adminv17';
  visibility: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }
  ngOnInit(): void {
    this.router.events.pipe(
      filter(events => events instanceof NavigationEnd),
      map(evt => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      ).subscribe(x => x['header'] === true ? this.visibility = true : this.visibility = false)
  }
}
