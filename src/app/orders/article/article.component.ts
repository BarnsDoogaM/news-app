import { Component, OnInit } from '@angular/core';
import { TopRatedNewsService } from '../top-rated-news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public sources: any = [];
  public articles: any = [];

  constructor(private TopRatedNews: TopRatedNewsService ) { }

  ngOnInit(): void {
    this.TopRatedNews.getNews().subscribe((res: any) => {
      console.log(res);
      this.sources = res.sources
    })
    this.TopRatedNews.getTopHeadLines().subscribe((res: any) => {
      console.log(res);
      this.articles = res.articles
    })



  }
}
