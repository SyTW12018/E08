import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from '../../issue.model';

import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

issues: Issue[];
displayedColumns = ['nombre', 'apellido1', 'apellido2', 'fecha', 'contrasena', 'correo', 'actions'];

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
    // this.issueService.getIssues().subscribe((issues) => {
    //   console.log(issues);
    // });
  }

  fetchIssues() {
    this.issueService
    .getIssues()
    .subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data requested ...');
      // console.log(this.issues);
    });
  }

  editIssue(id) {
    this.router.navigate([`/actualizar/${id}`]);
  }

  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }

}
