import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { matchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer{
  constructor(public team:string){}
  
  run(matches: MatchData[]): string {
    //checking how many times man united won
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === matchResult.homeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === matchResult.awayWin) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}