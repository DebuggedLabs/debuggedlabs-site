import { FrontpageComponent } from '../sections/frontpage/frontpage.component';
import { TechnologyComponent } from '../sections/technology/technology.component';
import { AboutComponent } from '../sections/about/about.component';
import { Routes } from '@angular/router';
import { PodcastsComponent } from '../sections/podcasts/podcasts.component';

export const routerConfig: Routes = [
    {
        path: 'home',
        component: FrontpageComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'podcasts',
        component: PodcastsComponent
    },
    {
        path: 'technology',
        component: TechnologyComponent
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];