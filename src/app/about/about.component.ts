import { Component, OnInit } from '@angular/core';
import { Image } from '../gallery/gallery.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  members: Image[] = [
    { image: 'assets/team/one.jpg', label: ''},
    { image: 'assets/team/two.jpg', label: ''},
    { image: 'assets/team/three.jpg', label: ''},
    { image: 'assets/team/four.jpg', label: ''}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
