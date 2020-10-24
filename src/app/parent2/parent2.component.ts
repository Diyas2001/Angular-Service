import { Component, OnInit } from '@angular/core';
import {SharedService} from '../Services/SharedService';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  constructor(private sharedService: SharedService) {}

  Sharevalue = this.sharedService.getValue();

  ngOnInit(): void {
  }
}
