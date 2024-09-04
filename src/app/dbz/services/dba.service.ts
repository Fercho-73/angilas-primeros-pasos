import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'


import { Character } from '../interface/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {

  public Character: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 9000
  }, {
    id: uuid(),
    name: 'Piccolo',
    power: 8000

  }];

  addCharacter(character: Character): void {

    const newCharacter: Character = { id: uuid(), ...character }
    this.Character.push(newCharacter)
  }

  // oneDeleteCharacter(index: number) {
  //   this.Character.splice(index, 1)
  // }
  deleteCharacterById(id: string) {
    this.Character = this.Character.filter(character => character.id !== id)

  }
}
