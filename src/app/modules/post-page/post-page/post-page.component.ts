import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Post } from 'src/app/definitions/interfaces';
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

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private router: Router,
              private postRetrievalService: PostRetrievalService) { }

  ngOnInit() {
    // parse the query params
    this.route.paramMap.subscribe(params => {
      // get the post id from the url parameters
      this.getPostFromBackend(params);
    });
  }

  private getPostFromBackend(params: ParamMap) {
    let postId = params.get('postid');
    this.post = this.postInput;

    // make a call to the backend if a post isn't passed in directly
    if (this.post == null || this.post == undefined)
    {
      console.log(this.post);
      console.log("Here is the post ID: ", postId);
      this.postRetrievalService.getSinglePost(postId, postFromBackend => {
        console.log("This is the post from backend:")
        console.log(postFromBackend);
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
