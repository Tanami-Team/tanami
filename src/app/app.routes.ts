import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { TeamComponent } from './Pages/team/team.component';
import { GovernanceComponent } from './Pages/governance/governance.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { AuthComponent } from './Pages/auth/auth.component';
import { IndividualoginComponent } from './Pages/auth/individualogin/individualogin.component';
import { IndividuaRegisterComponent } from './Pages/auth/individua-register/individua-register.component';
import { MediaCenterComponent } from './Pages/media-center/media-center.component';
import { TanamiVersionComponent } from './Pages/tanami-version/tanami-version.component';
import { TanamiTechComponent } from './Pages/tanami-tech/tanami-tech.component';
import { TanamiinitiativeComponent } from './Pages/tanamiinitiative/tanamiinitiative.component';
import { MediaDetailsComponent } from './Pages/media-center/media-details/media-details.component';
import { PorgramDetailsComponent } from './Pages/porgram-details/porgram-details.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'Team', component: TeamComponent },
  { path: 'Governance', component: GovernanceComponent },
  { path: 'Contact_us', component: ContactUsComponent },
  { path: 'Media_Center', component: MediaCenterComponent },
  { path: 'Media_Center/:id', component: MediaDetailsComponent },
  { path: 'Tanami_Version', component: TanamiVersionComponent },
  { path: 'TanamiTech', component: TanamiTechComponent },
  { path: 'Tanamiinitiative', component: TanamiinitiativeComponent },
  { path: 'PorgramDetails/:id', component: PorgramDetailsComponent },
  { path: 'Auth', component: AuthComponent },
  { path: 'Auth/Individual_login', component: IndividualoginComponent },
  { path: 'Auth/IndividuaRegister', component: IndividuaRegisterComponent },

  { path: '**', component: NotFoundComponent },
];