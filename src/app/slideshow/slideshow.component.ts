import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['coding.jpg',
    'computer.jpg',
    'create.jpg',
    'programming.jpg'];

  headlines = [
    'Push your Coding Experience to the next level!',
    'Improve your clean coding skills',
    'Create new Worlds',
    'Home-Office makes you more productive'];

  currentImage = 0;
  showImg = true;

  ngOnInit() {
    this.updateImg();
  }

  updateImg() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImg = false;

      setTimeout(() => {
        this.showImg = true;
      }, 5);
    }, 8000);
  }

}
