import { Component, OnInit } from "@angular/core";
import { IPosts } from "src/app/model/posts.interface";
import { PostsService } from "src/app/services/post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {

  posts: IPosts[] = [];
  postDetail: IPosts = {} as IPosts;
  modalStatus: "I" | "U" = 'I';

  constructor(private postsService: PostsService) { }
  ngOnInit(): void {
    this.getposts()
  }

  getposts() {
    this.postsService.get().subscribe(res => {
      this.posts = res
    })
  }

  openAddModal() {
    this.modalStatus = 'I';
    this.postDetail = {} as IPosts;
  }

  savePost() {
    if (this.modalStatus == 'U') {
      this.updatePost()
    }
    else {
      this.postsService.add(this.postDetail).subscribe({
        next: res => {
          this.posts.push(res)
        },
        error: err => {

        }
      })
    }

  }

  deletePost(id: number, x: number) {
    this.postsService.delete(id).subscribe(res => {
      this.posts.splice(x, 1)
    })
    //دیلیت میگیرده اون مقدار پیدا میکنه حذف میکنه
  }

  updateMethode(post: IPosts) {
    this.postDetail = post;
    this.modalStatus = 'U';
  }

  updatePost() {
    this.postsService.update(this.postDetail).subscribe(res => {

    })
  }


}

