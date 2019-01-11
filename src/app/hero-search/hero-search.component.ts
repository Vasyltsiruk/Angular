import { Component, OnInit } from '@angular/core';

import { HeroService } from '../services/hero.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes: any;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  search(term: string): void {
    this.searchTerms.next(term);
    this.heroService.searchHeroes(term).subscribe(res => {
      this.heroes = res;
    });
  }

  ngOnInit() {
  }
}
