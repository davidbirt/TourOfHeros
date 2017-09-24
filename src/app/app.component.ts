import { Component } from '@angular/core';
import { Hero } from './model/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'db-hero-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeroService]
})



export class AppComponent {
  constructor(private heroService: HeroService){
    this.heroService.getHeros().then(value => this.heroes = value);
  }
  title = 'Daves List of HEROES!!!';
  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes : Hero[];
  selectedHero : Hero;
  selectHero(hero: Hero): void{
    this.selectedHero = hero;
  }
}
