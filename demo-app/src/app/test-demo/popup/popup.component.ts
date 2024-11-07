import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { beaverImageSrc } from '../../constants';

type HandleClick = (input: HTMLInputElement) => void

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit , OnDestroy {
  @Input("isShown") isShown = false;
  @Output() onChildEvent = new EventEmitter<boolean>();

  beaverImg = "";
  toggle = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.beaverImg =  beaverImageSrc
      console.log("Data has been fetched on INIT");
      console.log("Subscribee for EVENTS");
      
    }, 500)
  }

  ngOnDestroy(): void {
    console.log("Unsubscribe from all of the EVENTS");
  }

  handleCLick() {
    console.log("Click button is working!");
    this.onChildEvent.emit(!this.toggle);
  }
}
