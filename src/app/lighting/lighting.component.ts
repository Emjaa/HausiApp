import {Component, OnInit, ViewChild} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Lamp} from "../Models/lamp";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.css'],
})

export class LightingComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
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
  getOn(): number{
    return this.lamps.filter(lamp => lamp.state == true).length;
  }
  getOff(): number{
    return this.lamps.filter(lamp => lamp.state == false).length;
  }

}
