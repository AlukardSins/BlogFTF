import { Component, OnInit, Input } from '@angular/core'

import { Category } from 'src/app/models/category'

import { Post } from '../../models/post'
import { PostService } from '../../services/post.service'

@Component({
  selector: 'post-feed',
  templateUrl: './feed.component.html',
  styleUrls: [
    './feed.component.css'
  ],
  providers: [
    PostService
  ]
})
export class FeedComponent implements OnInit {
  @Input() category: Category

  posts: Post[]
  selectedPost: Post

  constructor (private postService: PostService) {}

  ngOnInit () {
    this.postService.getAllPosts().subscribe((posts: Post[]) => {
      this.posts = posts.filter(el => {
        el.category === this.category._id
      })
    })
  }

  private getIndex = (postId: String) => {
    return this.posts.findIndex((post: Post) => {
      return post._id === postId
    })
  }

  selectPost (post: Post) {
    this.selectedPost = post
  }

  createPost = (post: Post) => {
    this.posts.push(post)
    this.selectPost(post)
    return this.posts
  }

  createNewPost () {
    let post: Post = {
      creator: '',
      score: 0,
      content: '',
      category: this.category._id
    }

    this.selectPost(post)
  }

  updatePost = (post: Post) => {
    let idx = this.getIndex(post._id)

    if (idx !== -1) {
      this.posts[idx] = post
      this.selectPost(post)
    }

    return this.posts
  }

  deletePost = (postId: String) => {
    let idx = this.getIndex(postId)
    if (idx !== -1) {
      this.posts.splice(idx, 1)
      this.selectPost(null)
    }

    return this.posts
  }
}
