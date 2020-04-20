import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {
  arrivalHours = 0;
  arrivalMinutes = 0;
  arrivalSeconds = 0;
  walkingHours = 0;
  walkingMinutes = 0;
  walkingSeconds = 0;
  outputHours = '00';
  outputMinutes = '00';
  outputSeconds = '00';

  onArrivalHours(event: any) {
    this.arrivalHours = Number(event.target.value);
  }

  onArrivalMinutes(event: any) {
    this.arrivalMinutes = Number(event.target.value);
  }

  onArrivalSeconds(event: any) {
    this.arrivalSeconds = Number(event.target.value);
  }

  onWalkingHours(event: any) {
    this.walkingHours = Number(event.target.value);
  }

  onWalkingMinutes(event: any) {
    this.walkingMinutes = Number(event.target.value);
  }

  onWalkingSeconds(event: any) {
    this.walkingSeconds = Number(event.target.value);
  }

  onCalculate() {
    let uebertragMinutes = 0;
    let uebertragHours = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    seconds = (this.arrivalSeconds + this.walkingSeconds) % 60;
    uebertragMinutes = Math.floor((this.arrivalSeconds + this.walkingSeconds) / 60);
    minutes = (this.arrivalMinutes + this.walkingMinutes) % 60 + uebertragMinutes;
    uebertragHours = Math.floor((this.arrivalMinutes + this.walkingMinutes) / 60);
    hours = (this.arrivalHours + this.walkingHours) % 24 + uebertragHours;

    this.outputHours = this.addZero(hours);
    this.outputMinutes = this.addZero(minutes);
    this.outputSeconds = this.addZero(seconds);
  }

  constructor() { }

  ngOnInit(): void {
  }

  addZero(num: number)
  {
    let str = String(num);
    if (str.length === 1) {
      str = '0' + str;
    }
    return str;
  }

}
