import { Character } from './../interface/character.interface';
import { Component } from '@angular/core';
import { DbzService } from '../services/dba.service';
import { AmbientZone } from 'zone.js/lib/zone-impl';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.componet.html'
})

export class MainPageCompo {

  constructor(private DbzService: DbzService) { }
  get Character(): Character[] {
    return [...this.DbzService.Character];
  }

  onDeleteCharacter(id: string): void {
    this.DbzService.deleteCharacterById(id);
  }

  onNewCharacter(Character: Character): void {
    this.DbzService.addCharacter(Character)
  }
}
