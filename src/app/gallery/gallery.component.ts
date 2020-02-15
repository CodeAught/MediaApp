import { Component, OnInit } from '@angular/core';

export interface Image {
  image: string;
  label: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Image[] = [
    { image: 'assets/gallery/island.jpg', label: 'Island'},
    { image: 'assets/gallery/kerala.jpg', label: 'Kerala'},
    { image: 'assets/gallery/mountain.jpg', label: 'Mountain'},
    { image: 'assets/gallery/port_louis.jpg', label: 'Port Louis'},
    { image: 'assets/gallery/rainforest.jpg', label: 'Amazon Rain Forest'},
    { image: 'assets/gallery/sri_lankan_island.jpg', label: 'Sri Lanka island'},
    { image: 'assets/gallery/srilanka.jpg', label: 'Sri Lanka'},
    { image: 'assets/gallery/under_sea.jpg', label: 'Under Sea'},
    { image: 'assets/gallery/vietnam.jpg', label: 'Vietnam'},
    { image: 'assets/gallery/vietnam_combodia.jpg', label: 'Vietnam & Combodia'},
    { image: 'assets/gallery/waterfall.jpg', label: 'Waterfall'},
    { image: 'assets/gallery/waterfall2.jpg', label: 'Waterfall'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
