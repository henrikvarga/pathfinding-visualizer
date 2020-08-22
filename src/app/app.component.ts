import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pathfinding-visualizer-angular';
  this.createBaseGrid();

  function createBaseGrid() {
  	let table = document.createElement("table");
	document.body.appendChild(table);
  }
}
