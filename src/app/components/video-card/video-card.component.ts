import { Component, input } from '@angular/core';
import { YoutubeSearchItem } from '../../models/api-reponse';

@Component({
  selector: 'app-video-card',
  imports: [],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {
addToPlaylist() {
throw new Error('Method not implemented.');
}
  video = input<YoutubeSearchItem>()

  openVideo() {
    const videoId = this.video()?.id?.videoId;
    if (videoId) {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    }
  }
}
