import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dataService: DataService) { }

  title = 'forms';

  user: { firstName: string; password: string } = {
    firstName: '',
    password: '',
  };

  posts;

  getPosts() {
    this.dataService.getPosts().subscribe(
      (posts) => {
        console.log('posts - get', posts);
        this.posts = posts;
      }
    );
  };

  ngOnInit() {
    this.getPosts();
  };

  onSubmit(): void {
    console.log(this.user);
  }
}


