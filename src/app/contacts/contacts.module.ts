import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContactsComponent } from './contacts.component';

// routes
import routes from './contacts.routes';

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    routes
  ],
  providers: [],
  bootstrap: [ContactsComponent]
})
export class ContactsModule { }
