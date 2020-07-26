import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: "Neat tree",
      image: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw neat tree'
    },
    {
      title: "Snowy mountain",
      image: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'I saw snowy mountain'
    },
  ]
}
