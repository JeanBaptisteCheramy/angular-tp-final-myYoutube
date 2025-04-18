import { Component, inject, input } from '@angular/core';
import { YoutubeSearchItem } from '../../models/api-reponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-card',
  imports: [],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
})
export class VideoCardComponent {
  private readonly router = inject(Router);
  video = input<YoutubeSearchItem>();

  openVideo() {
    const videoId = this.video()?.id?.videoId;
    this.router.navigate([`/player/${videoId}`]);
  }
  addToPlaylist() {
    console.log('Method not implemented.');
  }
}
