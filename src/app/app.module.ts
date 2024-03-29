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
import { PostPageBaseComponent } from './modules/post-page/post-page-base/post-page-base.component';
import { TextPostPageComponent } from './modules/post-page/text-post-page/text-post-page.component';
import { PostPageComponent } from './modules/post-page/post-page/post-page.component';
import { PodcastPostPageComponent } from './modules/post-page/podcast-post-page/podcast-post-page.component';
import { HomePageButtonComponent } from './modules/home-page-button/home-page-button.component';
import { ScienceComponent } from './sections/science/science.component';
import { NewsletterComponent } from './modules/newsletter/newsletter.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NewsletterButtonComponent } from './modules/newsletter-button/newsletter-button.component';

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
    PageNumberComponent,
    PostPageBaseComponent,
    TextPostPageComponent,
    PostPageComponent,
    PodcastPostPageComponent,
    HomePageButtonComponent,
    ScienceComponent,
    NewsletterComponent,
    NewsletterButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    LoadingBarRouterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(RouterConfig, { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
