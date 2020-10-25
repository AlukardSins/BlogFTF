import { Component, Input } from '@angular/core'

import { Post } from '../../models/post'
import { PostService } from '../../services/post.service'

@Component({
  selector: 'post-detail',
  templateUrl: './detail.component.html',
  styleUrls: [
    './detail.component.css'
  ]
})
export class DetailComponent {
  @Input() post: Post

  @Input() createHandler: Function

  @Input() updateHandler: Function

  @Input() deleteHandler: Function

  constructor (private postService: PostService) {}

  createPost (post: Post) {
    this.postService.createPost(post).subscribe((newPost: Post) => {
      this.createHandler(newPost)
    })
  }

  updatePost (post: Post): void {
    this.postService.updatePost(post).subscribe((updatedPost: Post) => {
      this.updateHandler(updatedPost)
    })
  }

  deletePost (postId: String): void {
    this.postService.deletePost(postId).subscribe((deletedPostId: String) => {
      this.deleteHandler(deletedPostId)
    })
  }
}
