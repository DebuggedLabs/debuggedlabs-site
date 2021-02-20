import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
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
import { CListComponent } from './modules/posts-list/c-list/c-list.component';
import { ICListComponent } from './modules/posts-list/ic-list/ic-list.component';
import { GalleryListComponent } from './modules/posts-list/gallery-list/gallery-list.component';
import { RowListComponent } from './modules/posts-list/row-list/row-list.component';
import { FeaturedPostCardComponent } from './modules/post-card/featured-post-card/featured-post-card.component';
import { ColumnPostCardComponent } from './modules/post-card/column-post-card/column-post-card.component';
import { HorizontalPostCardComponent } from './modules/post-card/horizontal-post-card/horizontal-post-card.component';
import { GalleryPostCardComponent } from './modules/post-card/gallery-post-card/gallery-post-card.component';
import { RowlistPostCardComponent } from './modules/post-card/rowlist-post-card/rowlist-post-card.component';
import { PostCardBaseComponent } from './modules/post-card/post-card-base/post-card-base.component';
import { PostsListBaseComponent } from './modules/posts-list/posts-list-base/posts-list-base.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { AuthorComponent } from './sections/author/author.component';
import { PageNotFoundComponent } from './sections/page-not-found/page-not-found/page-not-found.component';
import { PageNumberComponent } from './modules/page-number/page-number.component';

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
    HamburgerMenuComponent,
    CListComponent,
    ICListComponent,
    GalleryListComponent,
    RowListComponent,
    FeaturedPostCardComponent,
    ColumnPostCardComponent,
    HorizontalPostCardComponent,
    GalleryPostCardComponent,
    RowlistPostCardComponent,
    PostsListBaseComponent,
    PostCardBaseComponent,
    FooterComponent,
    AuthorComponent,
    PageNotFoundComponent,
    PageNumberComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
