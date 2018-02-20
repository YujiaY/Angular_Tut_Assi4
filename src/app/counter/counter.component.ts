import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>子组件当前值: {{ count }}</p>
    <button class="btn btn-primary" (click)="increment()"> + </button>
    <button class="btn btn-danger" (click)="decrement()"> - </button>
  `
  ,
  // inputs:['count:value'] // 类成员属性名称:绑定的输入属性名称 -1

})
export class CounterComponent {
  @Input() count: number = 0;

  @Output() countChange: EventEmitter<number> = new EventEmitter ();


  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChange.emit(this.count);
  }
}
