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

import { RouterConfig } from './config/router-config';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './modules/section-header/section-header.component';
import { PostCardComponent } from './modules/post-card/post-card.component';
import { SocialMediaLinksComponent } from './modules/social-media-links/social-media-links.component';
import { AboutPostComponent } from './sections/about/about-post/about-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HamburgerMenuIconComponent } from './modules/hamburger-menu-icon/hamburger-menu-icon.component';
import { HamburgerMenuComponent } from './navigation/hamburger-menu/hamburger-menu.component';

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
    SectionHeaderComponent,
    PostCardComponent,
    SocialMediaLinksComponent,
    AboutPostComponent,
    HamburgerMenuIconComponent,
    HamburgerMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    LoadingBarRouterModule,
    RouterModule.forRoot(
      RouterConfig
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
