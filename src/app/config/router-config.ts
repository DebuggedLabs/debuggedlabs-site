import { FrontpageComponent } from '../sections/frontpage/frontpage.component';
import { TechnologyComponent } from '../sections/technology/technology.component';
import { AboutComponent } from '../sections/about/about.component';
import { Routes } from '@angular/router';
import { PodcastsComponent } from '../sections/podcasts/podcasts.component';
import { AuthorComponent } from '../sections/author/author.component';
import { PageNotFoundComponent } from '../sections/page-not-found/page-not-found/page-not-found.component';
import { PostPageComponent } from '../modules/post-page/post-page/post-page.component';

export const RouterConfig: Routes = [

    // for the default pages
    {
        path: '',
        component: FrontpageComponent,
        data: {
            title: 'Debugged Labs'
        }
    },
    {
        path: 'podcasts',
        component: PodcastsComponent,
        data: {
            name: "Podcasts",
            title: 'Podcasts | Debugged Labs',
            iconUrl: 'assets/icons/podcast_icon.png',
            backgroundColor: '#3399ff'
        }
    },
    {
        path: 'technology',
        component: TechnologyComponent,
        data: {
            name: "Technology",
            title: 'Technology | Debugged Labs',
            iconUrl: 'assets/icons/technology_icon.png',
            backgroundColor: '#ff872e'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            name: "About",
            title: 'About | Debugged Labs',
            iconUrl: 'assets/icons/about_icon.png',
            backgroundColor: '#ff6666'
        }
    },
    {
      path: 'page-not-found',
      component: PageNotFoundComponent,
      data: {
        name: "Page Not Found",
        title: 'Page not found | Debugged Labs',
        iconUrl: 'assets/icons/page-not-found_icon.png',
        backgroundColor: '#ff6666'
      }
    },

    // to handle url parameters
    {
        path: 'podcasts/page/:page',
        component: PodcastsComponent,
        data: {
            name: "Podcasts",
            title: 'Podcasts | Debugged Labs',
            iconUrl: 'assets/icons/podcast_icon.png',
            backgroundColor: '#3399ff'
        }
    },
    {
        path: 'technology/page/:page',
        component: TechnologyComponent,
        data: {
            name: "Technology",
            title: 'Technology | Debugged Labs',
            iconUrl: 'assets/icons/technology_icon.png',
            backgroundColor: '#ff872e'
        }
    },

    // add /author support
    {
      path: 'author/:authorname',
      component: AuthorComponent,
      data: {
        name: "About Author",
        title: 'Author | Debugged Labs',
        iconUrl: 'assets/icons/author_icon.png',
        backgroundColor: '#ff6666'
      }
    },

    // to handle post pages
    {
      path: 'posts/:postid',
      component: PostPageComponent,
    },

    // to handle edge cases
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

export const MenuConfig: Routes = [
    RouterConfig[1], // Podcasts
    RouterConfig[2], // Technology
    RouterConfig[3] // About
];
