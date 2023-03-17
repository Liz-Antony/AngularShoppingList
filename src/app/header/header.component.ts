import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name="Elizabeth Antony";
  campus="Trafalgar";
  login="antonye";
  id="991666601";
  constructor() { }

  ngOnInit(): void {
  }

}
