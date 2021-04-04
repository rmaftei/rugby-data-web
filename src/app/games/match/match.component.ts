import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {

  @Input() homeTeamName:string;

  @Input() homeTeamScore:number;

  @Input() awayTeamName:string;

  @Input() awayTeamScore:number;

  @Input() date:String;

  @Input() hour:String;

  constructor() { }

  ngOnInit() {}

}
