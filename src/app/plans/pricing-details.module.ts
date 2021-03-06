import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { routing } from './pricing-plans.routes';
import { PricingPlansComponent } from './pricing-plans.component';
import { PlanOptionsComponent } from 'angular-atomic-library';
import { CartModule } from 'angular-atomic-library';

console.log('`Plans` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PricingPlansComponent,
    PlanOptionsComponent
  ],
  exports: [
      PricingPlansComponent,
      PlanOptionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CartModule,
    routing
  ]
})
export class PricingDetailsModule {
}
