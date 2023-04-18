import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  public heroNames: string[] = ['IronMan','Steven Rogers','Bruce Banner','Steven Strange'];
  public deletedHero?: string;
  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }


}
