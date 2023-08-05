import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/users"},
  { path: "users", component: UserprofileComponent},
  { path: "users/:id", component: AddressComponent},
  { path: 'address', component: AddressComponent},
  { path: 'company', component: CompanyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
