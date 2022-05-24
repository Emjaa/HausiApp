import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.css']
})
export class LightingComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
}
