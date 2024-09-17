import { Component, OnInit } from "@angular/core";
import { IPosts } from "src/app/model/posts.interface";
import { PostsService } from "src/app/services/post.service";

@Component({
    selector : "app-comment",
    templateUrl : "./profile.component.html",
    providers : [PostsService]
})
export class ProfileComponent implements OnInit{
    x:IPosts={
        id: 0,
        title: "",
        views: 0
    }
  constructor(private profileservice : PostsService ){}
    ngOnInit(): void {
        this.profileservice.get().subscribe(res=> 
            console.log(res)
        )
        this.profileservice.add(this.x).subscribe(res=>{
            //res hamni post mikoni
        })
        this.profileservice.delete(3)
        this.profileservice.update(this.x).subscribe(res=>{

        })
    }
  

  
}