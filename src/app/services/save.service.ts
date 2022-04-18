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
  }

  createSaveGame(): void
  {
    // only create test data for the moment
    //this.saveGame.addCampaign(new Campaign({title: 'camp 1', description: 'hello'}));
    //console.log(JSON.stringify(this.saveGame));
  }

}
