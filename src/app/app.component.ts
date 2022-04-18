import { Component, ElementRef, ViewChild } from '@angular/core';
import { SaveService } from './services/save.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tainted-grail-tracker';

  public constructor(
    private saveService: SaveService
  ) { }

  public async loadSaveFile(event: any)
  {
    const file:File = event.target.files[0];

    if (file) {
      this.saveService.loadSaveGame(await file.text());
    }
  }

  public createSaveFile(): void
  {
    this.saveService.createSaveGame();
  }
}
