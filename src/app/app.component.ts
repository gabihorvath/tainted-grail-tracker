import { Component, ElementRef, ViewChild } from '@angular/core';
import { SaveService } from './services/save.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tainted-grail-tracker';
  isSaveGameActive = false;

  public constructor(
    private saveService: SaveService
  ) { }

  public async loadSaveFile(event: any)
  {
    const file:File = event.target.files[0];

    if (file) {
      await this.saveService.loadSaveGame(await file.text());
      this.isSaveGameActive = true;
    }
  }

  public createSaveFile(): void
  {
    this.saveService.createSaveGame();
    this.isSaveGameActive = true;
  }
}
