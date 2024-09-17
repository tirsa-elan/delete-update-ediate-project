import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from "rxjs";
import { IPosts } from "../model/posts.interface";
@Injectable()

export class PostsService {
    constructor(private http: HttpClient) { }

    get(): Observable<IPosts[]> {
        return this.http.get<IPosts[]>("http://localhost:3000/posts")
    }
    add(post: IPosts): Observable<any> {
        return this.http.post("http://localhost:3000/posts", post)
    }
    update(post: IPosts): Observable<any> {
        return this.http.put("http://localhost:3000/posts/" + post.id, post)
    }
    delete(id: number): Observable<any> {
        return this.http.delete("http://localhost:3000/posts/" + id)
    }
    //معمولا میره ایدی پیدا میکنه دیلیت  میکنه مقادیر
}
