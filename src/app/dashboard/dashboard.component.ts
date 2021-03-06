import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero [];

  constructor(private heroService: HeroService) {
    this.heroService.getHeroes().subscribe((response: Hero[]) => {
      this.heroes = response;
    });
  }

  ngOnInit() {
  }
}
