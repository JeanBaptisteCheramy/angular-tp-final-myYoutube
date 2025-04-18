import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { YoutubeSearchResponse } from '../../models/api-reponse';
import { VideoCardComponent } from "../../components/video-card/video-card.component";

@Component({
  selector: 'app-search-page',
  imports: [FormsModule, VideoCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {
  private readonly apiService = inject(ApiService);
  public searchResults = signal<YoutubeSearchResponse | null>(null);
  search = '';

  submitSearch() {
    this.apiService.getVideos(this.search).subscribe({
      next: (response) => {
        this.searchResults.set(response);
        console.log(this.searchResults());
      },
      error: (error) => console.error(error),
    });
  }
}
