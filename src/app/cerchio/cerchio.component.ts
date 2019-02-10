import { Component, OnInit } from '@angular/core';
import { angularMath } from 'angular-ts-math';


@Component({
  selector: 'app-cerchio',
  templateUrl: './cerchio.component.html',
  styleUrls: ['./cerchio.component.css']
})
export class CerchioComponent implements OnInit {

public value: number;

  constructor() {
  }

  getArea(): number {
	const area = (this.value * this.value) * angularMath.getPi();
	return area;
}

getPerimeter(): number {
	const perimeter = (this.value * (angularMath.getPi()) * 2);
	return perimeter;
}

  ngOnInit() {
  }

}
