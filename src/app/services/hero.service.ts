import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROS } from './mock-heros'

@Injectable()
export class HeroService {
  getHeros() : Promise<Hero[]> {
    return Promise.resolve(HEROS);
  }
}
