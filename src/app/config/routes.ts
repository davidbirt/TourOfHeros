import { RouterModule, Routes } from '@angular/router';
import { HeroListingComponent } from '../hero-listing/hero-listing.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Response404Component } from '../response-404/response-404.component';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const appRoutes: Routes = [
    { path: 'hero/:id',      component: HeroDetailComponent },
    {
      path: 'heroes',
      component: HeroListingComponent,
      data: { title: 'Heroes List' }
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    { path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    { path: '**', component: Response404Component }
  ];