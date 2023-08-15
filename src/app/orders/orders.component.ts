import { Component, OnInit } from '@angular/core';
import { TopRatedNewsService } from './top-rated-news.service';
import { EMPTY, Subject, catchError } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
  public sources: any = [];
  public headlines: any = [];


  constructor() { }



  ngOnInit(): void {
 

  }

}
