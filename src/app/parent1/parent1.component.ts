import { Component, OnInit } from '@angular/core';
import {SharedService} from '../Services/SharedService';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  constructor(private sharedService: SharedService) {}
  Sharevalue = this.sharedService.getValue();

  ngOnInit(): void {
  }
}
