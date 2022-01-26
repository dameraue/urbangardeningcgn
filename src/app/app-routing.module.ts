import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { OverviewMapComponent } from './overview-map/overview-map.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
{ path: 'about', component: AboutComponent},
{ path: 'map', component: OverviewMapComponent},
{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
