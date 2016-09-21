import { RouterModule  } from '@angular/router';
import { EmailsComponent } from './emails/emails.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuxiliaryComponent } from './auxiliary/auxiliary.component';

const routes = [
  {path: 'emails', component: EmailsComponent},
  {path: 'auxiliary', outlet: 'aux', component: AuxiliaryComponent},
  {path: 'contacts', loadChildren: 'app/contacts/contacts.module#ContactsModule'},
  {path: '**', redirectTo: 'emails'}
];

export default RouterModule.forRoot(routes);
