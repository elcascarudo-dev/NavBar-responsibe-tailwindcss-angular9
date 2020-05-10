import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isOpen: Boolean = false;
  itemsMenuEstilo: String = 'px-2 pt-2 pb-4 hidden sm:block sm:flex';

  constructor() { }

  ngOnInit(): void {
  }

  cambioEstado(){
    this.isOpen = !this.isOpen

    if (this.isOpen) {
      this.itemsMenuEstilo = 'px-2 pt-2 pb-4 block sm:block sm:flex';
    } else {
      this.itemsMenuEstilo = 'px-2 pt-2 pb-4 hidden sm:block sm:flex';
    }
  }

}
