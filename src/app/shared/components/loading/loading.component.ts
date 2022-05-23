import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @HostBinding('class') classes = 'app-loading';

  constructor() { }

  ngOnInit(): void {
  }

}
