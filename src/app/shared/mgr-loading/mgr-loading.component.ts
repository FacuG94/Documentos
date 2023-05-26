import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mgr-loading',
  templateUrl: './mgr-loading.component.html',
  styleUrls: ['./mgr-loading.component.css']
})
export class MgrLoadingComponent implements OnInit {

  @Input() loaded: boolean; 
  constructor() { }

  ngOnInit() {
  }

}
