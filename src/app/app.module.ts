// angular's libs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ngrx
import { StoreModule } from '@ngrx/store';

// our reducers
import { CounterReducer } from './reducers/counter.reducer';

// our components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ counter: CounterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
