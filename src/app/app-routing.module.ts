import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';
import { LoginComponent } from './login/login.component';
import { FoodStatusComponent } from './food-status/food-status.component';
import { CharityDashBoardComponent } from './charity-dash-board/charity-dash-board.component';
import { DeliveryBoyDashBoardComponent } from './delivery-boy-dash-board/delivery-boy-dash-board.component';
import { ResturantProfileComponent } from './resturant-profile/resturant-profile.component';
import { CharityProfileComponent } from './charity-profile/charity-profile.component';
import { AvailabilityformComponent } from './availabilityform/availabilityform.component';
import { RestaurantprofileComponent } from './restaurantprofile/restaurantprofile.component'

import { from } from 'rxjs';
const routes: Routes = [
  {path : '',component :HomeComponent},
  {path: 'SignUp', component : SignUpComponent},
  {path: 'restaurantDashboard', component : RestaurantDashboardComponent},
  {path: 'Login', component : LoginComponent },
  {path: 'FoodStatus',component : FoodStatusComponent},
  {path: 'DeliveryBoyDashBoard',component : DeliveryBoyDashBoardComponent},
  {path: 'CharityDashBoard',component : CharityDashBoardComponent},
  {path: 'ResturantProfile',component : ResturantProfileComponent},
  {path: 'CharityProfile',component : CharityProfileComponent },
  {path: 'AvailabilityformComponent',component:AvailabilityformComponent},
  {path: 'RestaurantprofileComponent',component:RestaurantprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
