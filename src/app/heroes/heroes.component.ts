import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = new Hero();
  heroes: Hero [];

  constructor(private heroService: HeroService) {
    this.heroService.getHeroes().subscribe((response: Hero[]) => {
      this.heroes = response;
    });
  }

  ngOnInit() {
  }

  add(name) {
    this.hero.name = name;
    this.heroService.addHero(this.hero);
  }

  delete(hero) {
    this.heroService.deleteHero(hero.id);
  }
}
