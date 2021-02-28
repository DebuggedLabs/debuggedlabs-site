import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Post } from 'src/app/definitions/interfaces';
import { PodcastPost } from 'src/app/definitions/podcast';
import { PostRetrievalService } from 'src/app/services/post-retrieval.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  @Input() public postInput?: Post;

  public post: Post = null;
  public isPostValid: boolean = false;
  private postId: string = "";

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private router: Router,
              private postRetrievalService: PostRetrievalService) { }

  ngOnInit() {
    // parse the query params
    this.route.paramMap.subscribe(params => {
      // get the post id from the url parameters
      this.postId = params.get('postid');
    });
    this.getPostFromBackend();
  }

  private getPostFromBackend() {
    this.post = this.postInput;

    // make a call to the backend if a post isn't passed in directly
    if (this.post == null || this.post == undefined)
    {
      console.log(this.post);
      console.log("Here is the post ID: ", this.postId);
      this.postRetrievalService.getSinglePost(this.postId, postFromBackend => {
        if (postFromBackend != null) {
          this.post = postFromBackend;
          this.titleService.setTitle(this.post.title);
        }
        this.validateAndParsePostDetails(this.post);
      });
    }
    else {
      this.titleService.setTitle(this.post.title);
    }
  }

  /**
   * Function returning if post is loaded
   */
  public isPostLoaded(): boolean {
    return this.post != null && this.post != undefined;
  }

  /**
   * Boolean indicating if post is instance of podcast post
   */
  public isPodcastPost(): boolean {
    return this.post != null && this.post instanceof PodcastPost;
  }

  /**
  * Validate that the post id passed in the URL is indeed there
  * @param post post ID passed back from API
  */
  private validateAndParsePostDetails(post: Post) {
    if (post == null) {
      // navigate to the "page not found" page if post not found
      this.isPostValid = false;
      this.router.navigate(['page-not-found']);
    }
    else {
      this.isPostValid = true;
    }
  }
}
