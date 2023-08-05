import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/users"},
  { path: "users", component: UserprofileComponent},
  { path: "users/details/:id", component: UserDetailsComponent},
  { path: 'address', component: AddressComponent},
  { path: 'company', component: CompanyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
