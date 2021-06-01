import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendeursComponent } from "./vendeurs/vendeurs.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { VendeurDetailComponent } from "./vendeurs/vendeur-detail/vendeur-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'vendeurs', component: VendeursComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: VendeurDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
