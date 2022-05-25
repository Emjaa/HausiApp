import { Component, OnInit } from '@angular/core';
import {Lamp} from "../Models/lamp";

@Component({
  selector: 'app-lamp',
  styleUrls: ['./lamp.component.css'],
  template:'<p>Lamp is working</p>'
})
export class LampComponent implements OnInit {

  constructor() { }
  lamp = new Lamp(1);

  ngOnInit(): void {
  }
  id = 10;

}
