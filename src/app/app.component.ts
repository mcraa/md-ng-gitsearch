import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { IssuesComponent } from './issues/issues.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public http: Http, public dialog: MatDialog){  }

  repolist: Array<any>;

  getRepos(reponame){
    this.http.get("https://api.github.com/search/repositories?q="+reponame)
      .subscribe(
        res => { 
          this.repolist = res.json().items 
        },
        err => console.log(err)
      )
  }

  showIssues(repoid){
    let currentRepo = this.repolist.filter((repo) => repo.id == repoid)[0];

    if (currentRepo){
      this.openDialog(currentRepo.full_name);
    }
  }

  openDialog(fullName): void {
    let dialogRef = this.dialog.open(IssuesComponent, {
      width: '100%',
      data: { full_name: fullName }
    });
  }
}
