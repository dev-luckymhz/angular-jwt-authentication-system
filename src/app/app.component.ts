import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular authentication System';
  constructor(
    public _router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {
  }
  private getPageTitle(route: ActivatedRoute): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data['title'] || ''; // Set a default title if not provided
  }

  ngOnInit() {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const pageTitle = this.getPageTitle(this.activatedRoute);
        this.titleService.setTitle(`${pageTitle} - ${this.title}`);
      }
    });
  }
}
