import { Component, OnInit } from '@angular/core';
import { TopRatedNewsService } from '../top-rated-news.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  public sources: any = [];
  public articles: any = [];


 
  constructor(private TopRatedNews: TopRatedNewsService) { }

  ngOnInit(): void {
    this.TopRatedNews.getNews().subscribe((res: any) => {
      console.log(res);
      this.sources = res.sources
    })
    this.TopRatedNews.getTopHeadLines().subscribe((res: any) => {
      console.log(res);
      this.articles = res.articles
    });



}

}
