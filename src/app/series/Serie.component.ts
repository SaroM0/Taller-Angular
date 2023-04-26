import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SerieService } from './Series.service';

@Component({
  selector: 'app-serie',
  templateUrl: './Serie.component.html',
  styleUrls: ['./Serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  avgSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.getAvgSeasons(series);
    });
  }

  getAvgSeasons(series: Array<Serie>) {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    let avg: number = totalSeasons/(series.length);
    this.avgSeasons = avg;
  }

  ngOnInit() {
    this.getSeries();
  }

}