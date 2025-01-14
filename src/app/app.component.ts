import { Component } from '@angular/core';
import { Msg } from './service/msg/msg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Exotic-Wild-Market';
  msg = 'Are you gay?';

  height!: number;
  width!: number;

  constructor(private msgService: Msg) {
    this.height = screen.height;
    this.width = screen.width;
  }

  yes() {
    this.msgService.showWarning('Really!!!!!');
    this.msg = 'You are Gay';
  }

  entered() {
    let no = document.getElementById('no') as HTMLButtonElement;
    let random_y =
      Math.floor(
        Math.random() *
          (this.height - (this.height / 10) * 3 - this.height / 10)
      ) +
      this.height / 10;
    let random_x =
      Math.floor(
        Math.random() * (this.width - (this.width / 10) * 3 - this.width / 10)
      ) +
      this.width / 10;

    const noId = no?.id;
    if (noId) {
      no.style.position = 'fixed';
      no.style.top = random_y + 'px';
      no.style.left = random_x + 'px';
    } else {
      console.error('No element with id "no" found');
    }
  }
  beat() {
    this.msg = 'You Won!!!!!';
  }
}
