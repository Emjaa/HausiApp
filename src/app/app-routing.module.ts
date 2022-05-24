import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingStartComponent } from './routing-start/routing-start.component';
import { RoutingDestinationComponent } from './routing-destination/routing-destination.component';

const routes: Routes = [
  { path: 'first-component', component: RoutingStartComponent },
  { path: 'second-component', component: RoutingDestinationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
