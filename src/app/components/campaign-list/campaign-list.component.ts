import { Component, OnInit } from '@angular/core';
import { SaveGame } from 'src/app/models/save-game.model';
import { SaveService } from 'src/app/services/save.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent implements OnInit {

  public saveGame: SaveGame;

  constructor(private saveService: SaveService) { 
    this.saveGame = new SaveGame();;
  }

  ngOnInit(): void {
    this.saveGame = this.saveService.saveGame;
  }

}
