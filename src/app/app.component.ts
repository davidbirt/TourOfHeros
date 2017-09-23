import { Component } from '@angular/core';
import { Hero } from './model/hero';

let holder : number = 1;
let templateString : string = `Dave es totally rocking : ${holder}`;

const HEROES : Hero[] = [
{id: 11, name:'Mr. Robot'},
{id: 12, name:'Mr. Craig'},
{id: 13, name:'Mr. Coop'},
{id: 14, name:'Mr. Randy'},
{id: 15, name:'Mr. Wilson'},
{id: 16, name:'Mrs. Sara'},
{id: 17, name:'Mr. Bryant'},
{id: 18, name:'Mr. Dave'}]

@Component({
  selector: 'db-hero-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Daves List of HEROES!!!';
  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;
  selectedHero : Hero;
  selectHero(hero: Hero): void{
    this.selectedHero = hero;
  }
}
