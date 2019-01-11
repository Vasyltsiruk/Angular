import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero ;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getHero(params['id']);
    });
  }

  getHero(id: number): void {
    this.heroService.getHero(id).subscribe((hero: Hero) => {
      this.hero = hero;
    });
  }

  goBack() {
    this.location.back();
  }
  save() {
    this.heroService.updateHero(this.hero);
    this.goBack();
  }
  deleteHero() {
    this.heroService.deleteHero(this.hero.id);
    this.goBack();
  }
}
