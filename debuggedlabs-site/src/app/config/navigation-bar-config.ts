import { FrontpageComponent } from '../sections/frontpage/frontpage.component';
import { TechnologyComponent } from '../sections/technology/technology.component';
import { AboutComponent } from '../sections/about/about.component';
import { Routes } from '@angular/router';
import { PodcastsComponent } from '../sections/podcasts/podcasts.component';

export const routerConfig: Routes = [
    {
        path: '',
        component: FrontpageComponent,
        data: { title: 'Debugged Labs' }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: { title: 'About | Debugged Labs' }
    },
    {
        path: 'podcasts',
        component: PodcastsComponent,
        data: { title: 'Podcasts | Debugged Labs' }
    },
    {
        path: 'technology',
        component: TechnologyComponent,
        data: { title: 'Technology | Debugged Labs' }
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/'
    }
];