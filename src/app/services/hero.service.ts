import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from '../hero';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ApiService} from './api.service';

@Injectable()
export class HeroService {

  heroes: Hero [];
  hero: Hero;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private api: ApiService) { }

  getHeroes () {
    return this.api.get('');
  }
  getHero(id: number) {
    return this.api.get('/' + id);
  }
  searchHeroes(term: string) {
    if (!term.trim()) {
      return of([]);
    }

      return this.api.get('/list/' +  term);
  }
  addHero (hero: Hero) {
    this.api.post('', hero).subscribe();
  }
  deleteHero (id: number) {
    this.api.delete('/' + id).subscribe();
  }
  updateHero (hero: Hero) {
    this.api.put('', hero).subscribe();
  }

}
