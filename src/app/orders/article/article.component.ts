import { Component, OnInit } from '@angular/core';
import { TopRatedNewsService } from '../top-rated-news.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public sources: any = [];
  public articles: any = [];

  articleForm: FormGroup;
  searchText: string;

 
  constructor(private TopRatedNews: TopRatedNewsService) { }

  // private validationMessages = {
  //     required: 'field name is required.',
  //     minLength: 'field name must contain at least three characters.',
  //     maxLength: 'field name cannot exceed 5 characters.'
  // }


  ngOnInit(): void {
    this.TopRatedNews.getNews().subscribe((res: any) => {
      console.log(res);
      this.sources = res.sources
    })
    this.TopRatedNews.getTopHeadLines().subscribe((res: any) => {
      console.log(res);
      this.articles = res.articles
    });

    this.articleForm = new FormGroup({
      search: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(5)])
    });

    // const searchControl = this.articleForm.get('search');
    // searchControl.valueChanges.pipe(debounceTime(1000)).subscribe(
    //   value => this.setMessage(searchControl)
    //   )

      // this.listFilter = 'cart';
  }

  // setMessage(c: AbstractControl): void {
  //   this.searchText = '';
  //   if((c.touched || c.dirty) && c.errors) {
  //     this.searchText = Object.keys(c.errors).map(key => this.validationMessages[key]).join(' ');
  //   }
  // }

}
