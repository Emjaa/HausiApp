import { Component, OnInit } from '@angular/core';
import {Lamp} from "../Models/lamp";

@Component({
  selector: 'app-lamp',
  styleUrls: ['./lamp.component.css'],
  template:'<mat-slide-toggle>on</mat-slide-toggle>'
})
export class LampComponent implements OnInit {

  constructor() { }
  lamp = new Lamp(1);

  ngOnInit(): void {
  }
  id = 10;

}
