import { Component, OnInit, AfterViewInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnChanges,
DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  initialTime = 0;

  constructor() {
     // performe now source
    // https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
    this.initialTime = performance.now(); // take time in milisecond

  }

   ngOnChanges() {
    this.performTime('OnChange');
  }

  ngOnInit() {
    this.performTime('OnInit');
  }
  ngDoCheck() {
    this.performTime('DoCheck');
  }

  ngAfterContentInit() {
    this.performTime('AfterContentInit');
  }

  ngAfterContentChecked() {
    this.performTime('AfterContentChecked');
  }

  ngAfterViewInit() {
    this.performTime('AfterInit');
  }

  ngAfterViewChecked() {
    this.performTime('AfterViewChecked');
  }

  ngAfterContentCheck() {
    this.performTime('AfterContentCheck');
  }

  ngOnDestroy() {
    this.performTime('OnDestroy');
  }

  private performTime(eventToChek: string): number {
    const perfome = performance.now();
    const result = perfome - this.initialTime;
    console.log(` App Component    ${eventToChek} ${result} ms`);
    return result;
  }
}
