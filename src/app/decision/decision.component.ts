import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ITdDataTableColumn } from "@covalent/core";
import { Decision } from "./Decision";
import { Factor } from "./Factor";

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {

  decision:Decision;

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  goBack(): void {
    this._router.navigate(['']);
  }
  configWidthColumns: ITdDataTableColumn[] = [
    { name: 'define',  label: 'DEFINE',},
    { name: 'prevent', label: 'PREVENT',},
    { name: 'repair', label: 'REPAIR'},
  ];
  ngOnInit() {
    this.decision = new Decision();
    this.decision.factors=[];

    this.decision.factors.push(new Factor("t","ar","a"));
    this.decision.factors.push(new Factor("tes","a","r"));
    this.decision.factors.push(new Factor("test","r","ra"));
    console.log(this.decision.factors);
  }

  addRow(){
    this.decision.factors.push(new Factor("","",""));
  }

}
