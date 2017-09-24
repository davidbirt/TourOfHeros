import { Component } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-listing.component.html',
  styleUrls: ['./hero-listing.component.css'],
  providers:[HeroService]
})

export class HeroListingComponent {
  constructor(private heroService: HeroService){
    this.heroService.getHeros().then(value => this.heroes = value);
  }
  title = 'Daves List of HEROES!!!';
  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };
  ngOnChanges(){console.log('changes called')};
  ngOnInit(){console.log('init init init')};
  heroes : Hero[];
  selectedHero : Hero;
  selectHero(hero: Hero): void{
    this.selectedHero = hero;
  }
}
