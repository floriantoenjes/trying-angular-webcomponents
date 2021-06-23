import {ApplicationRef, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InputWithValidationComponent } from './input-with-validation/input-with-validation.component';
import {ReactiveFormsModule} from '@angular/forms';
import {createCustomElement} from '@angular/elements';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    InputWithValidationComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  entryComponents: [InputWithValidationComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(InputWithValidationComponent, {injector});
    customElements.define('input-with-validation', el);
  }

  public ngDoBootstrap(appRef: ApplicationRef): void {
    if (document.querySelector('app-root')) {
      appRef.bootstrap(AppComponent);
    }
  }
}
