import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  public baseUrl : any= 'https://fampay-assign.herokuapp.com/api/v1/video/fetch/';
  public footballNews : any= [];
  public searchNews : any = '';
  public sortAsc: any = 'ASC';
  public p: any;
  public limit:any = 10;
  public total:any = 10;

  constructor(private http:HttpClient) {
   }

  ngOnInit() {
    this.http.get(this.baseUrl+"getAll")
    .subscribe((res:any)=>{
      this.footballNews = res.response.result.video;
    })
  }

  pageChange($event: any) {
    this.p = $event;
    this.http.get(this.baseUrl+"getAll?page="+this.p+"&limit="+this.limit)
    .subscribe((res:any)=>{
      this.footballNews = res.response.result.video;
    })
  }

  filterNewsCards() {
    if(this.searchNews.length >= 3) {
      this.http.get(this.baseUrl+"getAll?"+"search="+this.searchNews)
      .subscribe((res:any)=>{
        this.footballNews = res.response.result.video;
    })} else {
      this.http.get(this.baseUrl+"getAll?limit=15")
      .subscribe((res:any)=>{
        this.footballNews = res.response.result.video;
    })} 
  }

  sortNewsCards() {
    if(this.sortAsc === 'ASC'){
      const sortedActivities = _.sortBy(this.footballNews, ['published_datetime']);
      this.footballNews = sortedActivities;
      console.log('footballNews',this.footballNews);
      this.sortAsc = 'DES';
    } else if(this.sortAsc === 'DES'){
      const sortedActivities = _.sortBy(this.footballNews.reverse(), ['published_datetime']);
      this.footballNews = sortedActivities;
      this.sortAsc = 'ASC';
    }
  }

}
