import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { PostsListComponent } from './modules/posts-list/posts-list.component';
import { NavigationBarComponent } from './navigation/navigation-bar/navigation-bar.component';
import { PodcastsComponent } from './sections/podcasts/podcasts.component';
import { TechnologyComponent } from './sections/technology/technology.component';
import { FrontpageComponent } from './sections/frontpage/frontpage.component';
import { AboutComponent } from './sections/about/about.component';
import { BannerComponent } from './navigation/banner/banner.component';
import { PostMenuItemComponent } from './modules/post-menu-item/post-menu-item.component';
import { PodcastMenuItemComponent } from './modules/podcast-menu-item/podcast-menu-item.component';
import { PodcastsListComponent } from './modules/podcasts-list/podcasts-list.component';

import { routerConfig } from './config/navigation-bar-config';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './modules/section-header/section-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    NavigationBarComponent,
    PodcastsComponent,
    TechnologyComponent,
    FrontpageComponent,
    AboutComponent,
    BannerComponent,
    PostMenuItemComponent,
    PodcastMenuItemComponent,
    PodcastsListComponent,
    SectionHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoadingBarRouterModule,
    RouterModule.forRoot(
      routerConfig
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
