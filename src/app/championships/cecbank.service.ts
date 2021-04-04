import { Injectable } from '@angular/core';

import { Game } from '../model/game'

import { Round } from '../model/round'

import { API_DATA } from '../games.mock'

@Injectable({
  providedIn: 'root'
})
export class CecbankService {

  constructor() { }

  private getData() {
    return API_DATA;
  }

  getRounds(): Round[] {
    let data = this.getData();

    let rounds: Round[] = [];

    let groupByStage = data.games.reduce((acc, game) => {
      if (!acc[game.stage]) {
        acc[game.stage] = [];
      }

      acc[game.stage].push(game);

      return acc;
    }, {});


    for (let stage in groupByStage) {
      let round = {
        title: stage,
        games: []
      };

     let asGames:Game[] = groupByStage[stage].map(serviceGame => {
        return {
          homeTeamName: serviceGame.title.split('-')[0],
          homeTeamScore: serviceGame.score.split('-')[0],

          awayTeamName: serviceGame.title.split('-')[1],
          awayTeamScore: serviceGame.score.split('-')[1],

          date: serviceGame.kickoff.split('-')[0],
          hour: serviceGame.kickoff.split('-')[1]
        }
      });

      round.games = asGames;

      rounds.push(round);
    }

    return rounds;
  }
}
