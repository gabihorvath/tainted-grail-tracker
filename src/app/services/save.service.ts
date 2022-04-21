import { Injectable } from '@angular/core';
import { Campaign } from '../models/campaign.model';
import { SaveGame } from '../models/save-game.model';

@Injectable({
  providedIn: 'root'
})
export class SaveService
{
  saveGame: SaveGame;

  constructor() {
    this.saveGame = new SaveGame();
  }

  loadSaveGame(content: string): void
  {
    this.saveGame = JSON.parse(content);
    console.log(this.saveGame);
  }

  createSaveGame(): void
  {
    this.saveGame.addCampaign(new Campaign());
  }

}
