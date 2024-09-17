import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http'
@Injectable()

export class PostsService {
    constructor(private http: HttpClient) { }

}