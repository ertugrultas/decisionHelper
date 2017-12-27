import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  goBack(): void {
    this._router.navigate(['']);
  }

  ngOnInit() {
  }

}
