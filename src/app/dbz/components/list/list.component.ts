import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent   {

  //Para recibir datos del mundo exterior
  //Luego en el html se debe enviar el dato asi: dbz-list es el componente hijo
  // <dbz-list [characterList]="characters"></dbz-list>
  @Input()
  public characterList : Character[] = [{
    name:'Trunks',
    power:10
  }];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{
    if( !id) return;
    this.onDeleteId.emit(id);
  }

}
