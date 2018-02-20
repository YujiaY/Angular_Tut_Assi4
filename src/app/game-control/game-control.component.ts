import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // @Output() intervalFired = new EventEmitter<number>();
  @Output() intervalFired: EventEmitter<number> = new EventEmitter();
  interval ;
  triggered: boolean = false;
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }
  onStartGame(){
    if (this.triggered === false){
    this.interval = setInterval(()=> {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;

    },1000);
      this.triggered = true;
    }

  }
  onPauseGame(){
    clearInterval(this.interval);
    this.triggered =false;

  }

}
