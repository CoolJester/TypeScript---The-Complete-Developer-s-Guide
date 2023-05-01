import { CsvFileReader } from "./CsvFileReader";
import { matchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

type matchData = [Date, string, string, number, number, matchResult, string];


export class MatchRead extends CsvFileReader<matchData>{
  mapRow(row: string[]): matchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as matchResult,
      row[6]
    ];
  }
}