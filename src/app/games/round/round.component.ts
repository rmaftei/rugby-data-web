import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../../model/game'

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss'],
})
export class RoundComponent implements OnInit {

  @Input() title:string;
  
  @Input() games:Game[]

  constructor() { }

  ngOnInit() { }

}
