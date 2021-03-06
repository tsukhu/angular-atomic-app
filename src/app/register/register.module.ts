import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { routing } from './register.routes';
import { RegisterComponent } from './register.component';
import { RegisterFormModule } from 'angular-atomic-library';

console.log('`Register User` bundle loaded asynchronously');

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        RegisterComponent
    ],
    exports: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RegisterFormModule,
        SharedModule,
        routing
    ]
})
export class RegisterModule {
}
