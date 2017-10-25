import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { Store, Action } from '@ngrx/store';
import { AppStore } from '../common/models/appstore.model';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Plan, Feature, FeatureMap, FeatureAvailability } from 'angular-atomic-library';
import { PlanService } from '../common/services/plan.service';
import { Logger } from '../common/logging/default-log.service';
import { ShoppingCart, LineItem } from 'angular-atomic-library';
import { ADD_ITEM } from '../common/reducers/shopping-cart';
import { DELETE_ITEM } from '../common/reducers/shopping-cart';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'pricing-plans',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './pricing-plans.component.html'
})
export class PricingPlansComponent implements OnInit {
  public plans: Observable<Plan[]>;
  public shoppingCart: Observable<ShoppingCart>;

  constructor(
    private logger: Logger,
    private store: Store<AppStore>,
    private planService: PlanService,
    private router: Router) {
    this.plans = this.planService.plans;
    this.shoppingCart = store.select('shoppingCart');
  }

  public onDeleteItem($event) {
    let lineItem: LineItem = $event;
    console.log(lineItem);
    this.store.dispatch(<Action>{ type: DELETE_ITEM, payload: lineItem });
  }

  public onCheckOut() {
    this.router.navigate(['/register']);
  }

  public onSelectionEvent($event): void {
    let plan: Plan = $event;
    console.log(plan);
    let lineItem: LineItem = <LineItem>{
      productId: plan.id,
      productName: plan.name,
      description: plan.description,
      unitPrice: plan.pricing
    };
    this.store.dispatch(<Action>{ type: ADD_ITEM, payload: lineItem });
  }

  public ngOnInit() {
    console.log('Pricing Plans Loaded Asynchronously');
  }
}
