import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangolo',
  templateUrl: './triangolo.component.html',
  styleUrls: ['./triangolo.component.css']
})
export class TriangoloComponent implements OnInit {

public lato1: number;
public lato2: number;

  constructor() { }

  getArea(): number {
    const area = (this.lato1 * this.lato2) / 2;
    return area;
}

getPerimeter(): number {
    const hypo = Math.sqrt((this.lato1 * this.lato1) + (this.lato2 * this.lato2));
    const perimeter = this.lato1 + this.lato2 + hypo;
    return perimeter;
}

  ngOnInit() {
  }

}
