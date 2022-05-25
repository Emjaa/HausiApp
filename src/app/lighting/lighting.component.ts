import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Lamp} from "../Models/lamp";

@Component({
  selector: 'app-lighting',
  template: '<div *ngFor="let lamp of lamps"> <h3>lamp: {{lamp.GetId()}} {{lamp.GetState()}}</h3></div>',
  styleUrls: ['./lighting.component.css'],
})

export class LightingComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  names = ['test', 'test'];
  lamps :Lamp[]=[] ;

  constructor() { }

  ngOnInit(): void {
      for (let i = 0; i < 10; i++){
        //this.lamps.fill(new Lamp(i));
        this.lamps.push(new Lamp(i))
      }
  }





}
