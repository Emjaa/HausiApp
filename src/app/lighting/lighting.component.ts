import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Lamp} from "../Models/lamp";

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.css'],
})

export class LightingComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  lamps :Lamp[]=[] ;
  lampIndex = 0;

  constructor() { }

  ngOnInit(): void {
      for (let i = 0; i < 10; i++){
        //this.lamps.fill(new Lamp(i));
        this.lamps.push(new Lamp(i))
        this.lampIndex++;
      }
  }

  removeLamp(index:number): void {
    this.lamps.splice(index);
  }

  createLamp():void{
    this.lamps.push(new Lamp(this.lampIndex))
    this.lampIndex++;
  }

}
