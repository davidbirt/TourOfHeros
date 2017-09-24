import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService) {
    this.heroService.getHeros().then(val => this.heros = val.slice(1,5));
  }
  heros : Hero[];
  ngOnInit() {
    console.log('dashboard init called');
  }

}
