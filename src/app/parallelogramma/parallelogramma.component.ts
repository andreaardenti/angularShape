import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallelogramma',
  templateUrl: './parallelogramma.component.html',
  styleUrls: ['./parallelogramma.component.css']
})
export class ParallelogrammaComponent implements OnInit {

  public base: number;
  public altezza: number;
  
  constructor() { }

  getArea(): number {
    const area = this.base * this.altezza;
    return area;
}

getPerimeter(): number {
    const perimeter = (this.base * this.altezza) / 2;
    return perimeter;
}

  ngOnInit() {
  }

}
