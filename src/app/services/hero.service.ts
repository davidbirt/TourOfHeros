import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROS } from './mock-heros'

@Injectable()
export class HeroService {
  getHeros() : Promise<Hero[]> {
    return Promise.resolve(HEROS);
  }
  getHero(id: number): Promise<Hero> {
    //Get a hero from the collection with this Id
    var hero = HEROS.find(hr => hr.id === id);
    return Promise.resolve(hero);
  }

}
