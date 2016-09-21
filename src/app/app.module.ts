// angular's libs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// ngrx
import { StoreModule } from '@ngrx/store';

// our reducers
import { CounterReducer } from './reducers/counter.reducer';

// our modules

// our components
import { AppComponent } from './app.component';
import { EmailsComponent } from './emails/emails.component';
import { AuxiliaryComponent } from './auxiliary/auxiliary.component';

// routes
import routes from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    EmailsComponent,
    AuxiliaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routes,
    StoreModule.provideStore({ counter: CounterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
