import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROS } from './mock-heros'

@Injectable()
export class HeroService {
  getHeros() : Hero[] {
    return HEROS;
  }
}
