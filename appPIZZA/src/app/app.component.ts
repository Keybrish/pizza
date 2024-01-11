import { Component } from '@angular/core';

@Component({
  selector: 'pizza-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appPIZZA';
  expanded = true;

  toggleExpanded(expanded: boolean){
    this.expanded = expanded
  }
}