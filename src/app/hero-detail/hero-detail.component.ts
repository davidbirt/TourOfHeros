import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap'; // this is the switchMap operator.. wtf is an operator?

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})

export class HeroDetailComponent implements OnInit {
  ngOnInit(): void {
    console.log('setting up hero detail component.');
    this.route.paramMap
        .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
        .subscribe(hero => this.hero = hero);
  }
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ){}
  @Input() hero :Hero;
  goBack(): void {
    this.location.back();
  }
}
