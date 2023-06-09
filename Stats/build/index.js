"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
//create an object
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//create and instance of match reader
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
