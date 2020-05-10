import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desplegable',
  templateUrl: './desplegable.component.html',
  styleUrls: ['./desplegable.component.css']
})
export class DesplegableComponent implements OnInit {

  isOpen: Boolean = false;


  constructor() { }

  ngOnInit(): void {

    const escape = (e) => {
      if ( e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false;
      }
    }
  
    document.addEventListener( 'keydown', escape );

    
  }


}
