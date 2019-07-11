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
        data: { 
            title: 'About | Debugged Labs',
            iconUrl: 'assets/icons/about_icon.png',
            backgroundColor: '#ff6666'
        }
    },
    {
        path: 'podcasts',
        component: PodcastsComponent,
        data: { 
            title: 'Podcasts | Debugged Labs',
            iconUrl: 'assets/icons/podcast_icon.png',
            backgroundColor: '#3399ff'
        }
    },
    {
        path: 'technology',
        component: TechnologyComponent,
        data: { 
            title: 'Technology | Debugged Labs',
            iconUrl: 'assets/icons/technology_icon.png',
            backgroundColor: '#00ff00'
        }
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