import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Http } from '@angular/http';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public http: Http) { }

  issues: Array<any>;

  ngOnInit(){
    this.http.get("https://api.github.com/search/issues?q=is:open+repo:"+this.data.full_name)
      .subscribe(
        res => { this.issues = res.json().items; console.log(res.json()); }
      )
  }
}

