import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['coding.jpg', 'computer.jpg', 'create.jpg', 'programming.jpg'];
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
      }, 10);
    }, 8000);
  }


}
